-- Esquema de Supabase para Cojauny
-- Ejecutar estos pasos en el proyecto Supabase "mi-proyecto-supabase"

create extension if not exists "uuid-ossp" with schema extensions;
create extension if not exists pgcrypto;

create table if not exists public.waitlist (
    id uuid primary key default uuid_generate_v4(),
    email text not null,
    name text not null,
    company text,
    use_case text,
    flight text,
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

alter table if exists public.waitlist add column if not exists company text;
alter table if exists public.waitlist add column if not exists use_case text;
alter table if exists public.waitlist add column if not exists flight text;
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
alter table if exists public.waitlist add column if not exists confirmed_at timestamptz;
alter table if exists public.waitlist add column if not exists ip_address inet;
alter table if exists public.waitlist add column if not exists user_agent text;
alter table if exists public.waitlist drop column if exists join_reason;

create unique index if not exists waitlist_email_idx on public.waitlist (lower(email));
create index if not exists waitlist_created_idx on public.waitlist (created_at);

create table if not exists public.feedback (
    id uuid primary key default uuid_generate_v4(),
    email text not null,
    name text not null,
    message text not null,
    sentiment text not null check (sentiment in ('positive', 'neutral', 'negative', 'contact')),
    topic text,
    language text not null default 'es',
    ip_address inet,
    user_agent text,
    created_at timestamptz not null default timezone('utc', now())
);

alter table if exists public.feedback add column if not exists sentiment text;
alter table if exists public.feedback alter column sentiment set default 'neutral';
update public.feedback set sentiment = 'neutral' where sentiment is null;
alter table if exists public.feedback alter column sentiment set not null;
alter table if exists public.feedback add column if not exists topic text;
alter table if exists public.feedback add column if not exists language text not null default 'es';
alter table if exists public.feedback add column if not exists ip_address inet;
alter table if exists public.feedback add column if not exists user_agent text;
alter table if exists public.feedback drop constraint if exists feedback_sentiment_check;
alter table if exists public.feedback add constraint feedback_sentiment_check
    check (sentiment in ('positive', 'neutral', 'negative', 'contact'));

create index if not exists feedback_sentiment_idx on public.feedback (sentiment);
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
        use_case = null,
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
