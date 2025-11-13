-- Esquema de Supabase para Cojauny
-- Ejecutar estos pasos en el proyecto Supabase "mi-proyecto-supabase"

create extension if not exists "uuid-ossp" with schema extensions;
create extension if not exists pgcrypto;

create table if not exists public.beta_signups (
    id uuid primary key default uuid_generate_v4(),
    email text not null,
    full_name text not null,
    company text,
    use_case text not null,
    terms_accepted boolean not null default false,
    confirmation_token text not null,
    confirmed_at timestamptz,
    ip_address inet,
    user_agent text,
    created_at timestamptz not null default timezone('utc', now())
);

create unique index if not exists beta_signups_email_idx on public.beta_signups (lower(email));
create index if not exists beta_signups_created_idx on public.beta_signups (created_at);

create table if not exists public.feedback (
    id uuid primary key default uuid_generate_v4(),
    email text not null,
    name text not null,
    message text not null,
    sentiment text not null check (sentiment in ('positive', 'neutral', 'negative')),
    ip_address inet,
    user_agent text,
    created_at timestamptz not null default timezone('utc', now())
);

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

alter table public.beta_signups enable row level security;
alter table public.feedback enable row level security;
alter table public.emails_sent enable row level security;

create role cojauny_beta_writer;

create policy "Permitir inserciones autenticadas en beta_signups"
    on public.beta_signups
    for insert
    to authenticated, service_role
    with check (true);

create policy "Permitir lectura de beta_signups a service_role"
    on public.beta_signups
    for select using (auth.role() = 'service_role');

create policy "Insert feedback" on public.feedback
    for insert
    to authenticated, service_role
    with check (true);

create policy "Lectura feedback restringida"
    on public.feedback
    for select using (auth.role() = 'service_role');

create policy "Insert emails_sent" on public.emails_sent
    for insert
    to service_role
    with check (true);

create policy "Lectura emails_sent" on public.emails_sent
    for select using (auth.role() = 'service_role');

-- Función para anonimizar datos cuando un usuario solicita la eliminación
create or replace function public.anonymize_user_data(target_email text)
returns jsonb as $$
declare
    deleted_beta int;
    deleted_feedback int;
begin
    update public.beta_signups
    set email = concat('anon-', md5(email || now()) , '@example.com'),
        full_name = 'Eliminado',
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
        'beta_signups_cleaned', coalesce(deleted_beta, 0),
        'feedback_cleaned', coalesce(deleted_feedback, 0)
    );
end;
$$ language plpgsql security definer;

grant execute on function public.anonymize_user_data(text) to service_role;

grant usage on schema public to cojauny_beta_writer;

grant insert on public.beta_signups to cojauny_beta_writer;

grant insert on public.feedback to cojauny_beta_writer;
