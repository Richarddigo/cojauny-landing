-- Esquema de Supabase para Cojauny
-- Ejecutar estos pasos en el proyecto Supabase "mi-proyecto-supabase"

create extension if not exists "uuid-ossp" with schema extensions;
create extension if not exists pgcrypto;

create table if not exists public.waitlist (
    id uuid primary key default uuid_generate_v4(),
    email text not null,
    name text not null,
    usecase text,
    country text not null default 'es',
    flight_frequency text not null default 'once',
    home_airport text,
    marketing_opt_in boolean not null default false,
    beta_tester boolean not null default true,
    terms_accepted boolean not null default false,
    privacy_accepted boolean not null default false,
    language text not null default 'es',
    confirmation_token text,
    confirmed_at timestamptz,
    ip_address inet,
    user_agent text,
    created_at timestamptz not null default timezone('utc', now())
);

alter table if exists public.waitlist add column if not exists usecase text;
alter table if exists public.waitlist add column if not exists country text not null default 'es';
alter table if exists public.waitlist add column if not exists flight_frequency text not null default 'once';
alter table if exists public.waitlist add column if not exists home_airport text;
    -- join_reason column has been removed
alter table if exists public.waitlist add column if not exists marketing_opt_in boolean not null default false;
alter table if exists public.waitlist add column if not exists beta_tester boolean not null default true;
alter table if exists public.waitlist add column if not exists terms_accepted boolean not null default false;
alter table if exists public.waitlist add column if not exists privacy_accepted boolean not null default false;
alter table if exists public.waitlist add column if not exists language text not null default 'es';
alter table if exists public.waitlist add column if not exists confirmation_token text;
alter table if exists public.waitlist add column if not exists ip_address inet;
alter table if exists public.waitlist add column if not exists user_agent text;
alter table if exists public.waitlist add column if not exists referral_code_used text;

create unique index if not exists waitlist_email_idx on public.waitlist (lower(email));
create index if not exists waitlist_created_idx on public.waitlist (created_at);

create table if not exists public.feedback (
    id uuid primary key default uuid_generate_v4(),
    email text not null,
    name text not null,
    message text not null,
    usecase text not null check (usecase in ('feedback', 'idea', 'business_proposal', 'contact')),
    topic text,
    language text not null default 'es',
    ip_address inet,
    user_agent text,
    created_at timestamptz not null default timezone('utc', now())
);

alter table if exists public.feedback add column if not exists usecase text;
alter table if exists public.feedback alter column usecase set default 'idea';
update public.feedback set usecase = 'idea' where usecase is null;
alter table if exists public.feedback alter column usecase set not null;
alter table if exists public.feedback add column if not exists topic text;
alter table if exists public.feedback add column if not exists language text not null default 'es';
alter table if exists public.feedback add column if not exists ip_address inet;
alter table if exists public.feedback add column if not exists user_agent text;
alter table if exists public.feedback drop constraint if exists feedback_case_check;
alter table if exists public.feedback add constraint feedback_case_check
    check (usecase in ('feedback', 'idea', 'business_proposal', 'contact'));

create index if not exists feedback_usecase_idx on public.feedback (usecase);
create index if not exists feedback_created_idx on public.feedback (created_at);

create table if not exists public.emails_sent (
    id uuid primary key default uuid_generate_v4(),
    recipient text not null,
    template text not null,
    status text not null,
    error_message text,
    metadata jsonb,
    created_at timestamptz not null default timezone('utc', now())
);

alter table if exists public.emails_sent add column if not exists metadata jsonb;
alter table if exists public.emails_sent add column if not exists subject text;
alter table if exists public.emails_sent add column if not exists smtp_host text;
alter table if exists public.emails_sent add column if not exists message_id text;
alter table if exists public.emails_sent add column if not exists locale text default 'es';

create index if not exists emails_sent_recipient_idx on public.emails_sent (recipient);
create index if not exists emails_sent_template_idx on public.emails_sent (template);
create index if not exists emails_sent_status_idx on public.emails_sent (status);
create index if not exists emails_sent_created_idx on public.emails_sent (created_at);

alter table public.waitlist enable row level security;
alter table public.feedback enable row level security;
alter table public.emails_sent enable row level security;

do $$
begin
  if not exists (select 1 from pg_roles where rolname = 'cojauny_beta_writer') then
    create role cojauny_beta_writer;
  end if;
end $$;

drop policy if exists "Permitir inserciones autenticadas en waitlist" on public.waitlist;
create policy "Permitir inserciones autenticadas en waitlist"
    on public.waitlist
    for insert
    to authenticated, service_role
    with check (true);

drop policy if exists "Permitir lectura de waitlist a service_role" on public.waitlist;
create policy "Permitir lectura de waitlist a service_role"
    on public.waitlist
    for select using (auth.role() = 'service_role');

drop policy if exists "Insert feedback" on public.feedback;
create policy "Insert feedback" on public.feedback
    for insert
    to authenticated, service_role
    with check (true);

drop policy if exists "Lectura feedback restringida" on public.feedback;
create policy "Lectura feedback restringida"
    on public.feedback
    for select using (auth.role() = 'service_role');

drop policy if exists "Insert emails_sent" on public.emails_sent;
create policy "Insert emails_sent" on public.emails_sent
    for insert
    to service_role
    with check (true);

drop policy if exists "Lectura emails_sent" on public.emails_sent;
create policy "Lectura emails_sent" on public.emails_sent
    for select using (auth.role() = 'service_role');

-- Función para anonimizar datos cuando un usuario solicita la eliminación
create or replace function public.anonymize_user_data(target_email text)
returns jsonb as $$
declare
    deleted_beta int;
    deleted_feedback int;
begin
    update public.waitlist
    set email = concat('anon-', md5(email || now()) , '@example.com'),
        name = 'Eliminado',
        company = null,
        usecase = null,
        confirmation_token = null
    where lower(email) = lower(target_email)
    returning 1 into deleted_beta;

    update public.feedback
    set email = concat('anon-', md5(email || now()) , '@example.com'),
        name = 'Eliminado',
        message = '[Contenido eliminado por petición del usuario]'
    where lower(email) = lower(target_email)
    returning 1 into deleted_feedback;

    return jsonb_build_object(
        'waitlist_cleaned', coalesce(deleted_beta, 0),
        'feedback_cleaned', coalesce(deleted_feedback, 0)
    );
end;
$$ language plpgsql security definer;

grant execute on function public.anonymize_user_data(text) to service_role;

grant usage on schema public to cojauny_beta_writer;

grant insert on public.waitlist to cojauny_beta_writer;

grant insert on public.feedback to cojauny_beta_writer;

-- ============================================================
-- Referral System / Sistema de Invitaciones / Empfehlungssystem / Système de Parrainage
-- ============================================================

-- Create referral_stats table / Crear tabla referral_stats / Tabelle referral_stats erstellen / Créer la table referral_stats
create table if not exists public.referral_stats (
    uuid uuid primary key references public.waitlist(id) on delete cascade,
    referral_code text not null unique,
    referral_link text not null,
    visits integer not null default 0,
    signups integer not null default 0,
    created_at timestamptz not null default timezone('utc', now()),
    updated_at timestamptz not null default timezone('utc', now())
);

create unique index if not exists referral_stats_code_idx on public.referral_stats (referral_code);
create index if not exists referral_stats_uuidx on public.referral_stats (uuid);

-- Enable RLS on referral_stats / Habilitar RLS en referral_stats / RLS aktivieren / Activer RLS
alter table public.referral_stats enable row level security;

-- RLS Policy: Allow service role to manage all records
create policy "Permitir lectura de referral_stats a service_role"
    on public.referral_stats
    for select using (auth.role() = 'service_role');

create policy "Permitir actualización de referral_stats a service_role"
    on public.referral_stats
    for update using (auth.role() = 'service_role');

create policy "Permitir inserción de referral_stats a service_role"
    on public.referral_stats
    for insert
    to service_role
    with check (true);

-- Function to generate unique referral code / Función para generar código único
-- Fonction pour générer un code unique / Funktion zur Generierung eines eindeutigen Codes
create or replace function public.generate_referral_code()
returns text as $$
declare
    code text;
    exists_check boolean;
begin
    loop
        -- Generate 8-character alphanumeric code / Generar código alfanumérico de 8 caracteres
        -- Générer un code alphanumérique de 8 caractères / 8-stelligen alphanumerischen Code generieren
        code := upper(substr(md5(random()::text || clock_timestamp()::text), 1, 8));
        
        -- Check if code already exists / Verificar si el código ya existe
        -- Vérifier si le code existe déjà / Prüfen ob Code bereits existiert
        select exists(select 1 from public.referral_stats where referral_code = code) into exists_check;
        
        exit when not exists_check;
    end loop;
    
    return code;
end;
$$ language plpgsql security definer;

-- Function to create referral stats for new user / Función para crear estadísticas de referral
-- Fonction pour créer les stats de parrainage / Funktion zur Erstellung von Empfehlungsstatistiken
create or replace function public.create_referral_stats_for_user()
returns trigger as $$
declare
    new_code text;
    base_url text;
begin
    -- Generate unique referral code / Generar código único de referral
    -- Générer un code de parrainage unique / Eindeutigen Empfehlungscode generieren
    new_code := public.generate_referral_code();
    
    -- Get base URL from environment or use default
    base_url := 'https://www.cojauny.com';
    
    -- Insert referral stats / Insertar estadísticas de referral
    -- Insérer les statistiques de parrainage / Empfehlungsstatistiken einfügen
    insert into public.referral_stats (uuid, referral_code, referral_link, visits, signups)
    values (
        NEW.id,
        new_code,
        base_url || '?ref=' || new_code,
        0,
        0
    );
    
    return NEW;
end;
$$ language plpgsql security definer;

-- Trigger to auto-create referral stats when user signs up / Trigger para auto-crear stats
-- Déclencheur pour créer automatiquement les stats / Trigger zur automatischen Erstellung
drop trigger if exists create_referral_on_signup on public.waitlist;
create trigger create_referral_on_signup
    after insert on public.waitlist
    for each row
    execute function public.create_referral_stats_for_user();

-- Function to increment referral visits / Función para incrementar visitas
-- Fonction pour incrémenter les visites / Funktion zur Erhöhung der Besuche
create or replace function public.increment_referral_visits(ref_code text)
returns jsonb as $$
declare
    result_row public.referral_stats;
begin
    -- Update visits counter / Actualizar contador de visitas
    -- Mettre à jour le compteur de visites / Besucherzähler aktualisieren
    update public.referral_stats
    set visits = visits + 1,
        updated_at = timezone('utc', now())
    where referral_code = ref_code
    returning * into result_row;
    
    if result_row is null then
        return jsonb_build_object('error', 'Referral code not found');
    end if;
    
    return jsonb_build_object(
        'success', true,
        'visits', result_row.visits,
        'signups', result_row.signups
    );
end;
$$ language plpgsql security definer;

-- Function to increment referral signups / Función para incrementar registros
-- Fonction pour incrémenter les inscriptions / Funktion zur Erhöhung der Anmeldungen
create or replace function public.increment_referral_signups(ref_code text)
returns jsonb as $$
declare
    result_row public.referral_stats;
begin
    -- Update signups counter / Actualizar contador de registros
    -- Mettre à jour le compteur d'inscriptions / Anmeldungszähler aktualisieren
    update public.referral_stats
    set signups = signups + 1,
        updated_at = timezone('utc', now())
    where referral_code = ref_code
    returning * into result_row;
    
    if result_row is null then
        return jsonb_build_object('error', 'Referral code not found');
    end if;
    
    return jsonb_build_object(
        'success', true,
        'visits', result_row.visits,
        'signups', result_row.signups
    );
end;
$$ language plpgsql security definer;

grant execute on function public.generate_referral_code() to service_role;
grant execute on function public.increment_referral_visits(text) to service_role, authenticated, anon;
grant execute on function public.increment_referral_signups(text) to service_role;

grant select on public.referral_stats to service_role;
grant insert on public.referral_stats to service_role;
grant update on public.referral_stats to service_role;

-- ============================================================
-- Mejoras a tabla emails_sent para logging completo
-- Ejecutar en Supabase SQL Editor
-- ============================================================

-- 1. Añadir columna subject para búsqueda/filtrado rápido
ALTER TABLE public.emails_sent 
ADD COLUMN IF NOT EXISTS subject text;

-- 2. Añadir columna smtp_host para auditoría de qué servidor se usó
ALTER TABLE public.emails_sent 
ADD COLUMN IF NOT EXISTS smtp_host text;

-- 3. Añadir columna message_id para tracking (el ID que devuelve el servidor SMTP)
ALTER TABLE public.emails_sent 
ADD COLUMN IF NOT EXISTS message_id text;

-- 4. Añadir columna locale para saber en qué idioma se envió
ALTER TABLE public.emails_sent 
ADD COLUMN IF NOT EXISTS locale text DEFAULT 'es';

-- 5. Índices para consultas frecuentes
CREATE INDEX IF NOT EXISTS emails_sent_recipient_idx ON public.emails_sent (recipient);
CREATE INDEX IF NOT EXISTS emails_sent_template_idx ON public.emails_sent (template);
CREATE INDEX IF NOT EXISTS emails_sent_status_idx ON public.emails_sent (status);
CREATE INDEX IF NOT EXISTS emails_sent_created_idx ON public.emails_sent (created_at);

-- 6. Comentarios descriptivos
COMMENT ON TABLE public.emails_sent IS 'Log de todos los emails enviados desde Firebase Functions para auditoría y GDPR compliance';
COMMENT ON COLUMN public.emails_sent.subject IS 'Asunto del email enviado';
COMMENT ON COLUMN public.emails_sent.smtp_host IS 'Servidor SMTP usado para el envío';
COMMENT ON COLUMN public.emails_sent.message_id IS 'Message-ID devuelto por el servidor SMTP';
COMMENT ON COLUMN public.emails_sent.locale IS 'Idioma del template usado';
