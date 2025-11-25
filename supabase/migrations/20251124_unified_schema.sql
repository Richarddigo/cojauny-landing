-- Unified migration for Cojauny: waitlist, feedback, emails_sent, referral_stats
-- Run this in your Supabase SQL editor or psql connected to the project.

begin;

-- Extensions
create extension if not exists "uuid-ossp" with schema extensions;
create extension if not exists pgcrypto;

-- Waitlist (beta signups)
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
  referral_code_used text,
  created_at timestamptz not null default timezone('utc', now())
);

create unique index if not exists waitlist_email_idx on public.waitlist (lower(email));
create index if not exists waitlist_created_idx on public.waitlist (created_at);

-- Feedback / Contact messages
create table if not exists public.feedback (
  id uuid primary key default uuid_generate_v4(),
  email text not null,
  name text not null,
  message text not null,
  case text not null default 'idea',
  topic text,
  language text not null default 'es',
  ip_address inet,
  user_agent text,
  created_at timestamptz not null default timezone('utc', now())
);

-- Ensure allowed cases
alter table if exists public.feedback drop constraint if exists feedback_case_check;
alter table if exists public.feedback add constraint feedback_case_check
  check (case in ('feedback','idea','business_proposal','contact'));

create index if not exists feedback_case_idx on public.feedback (case);
create index if not exists feedback_created_idx on public.feedback (created_at);

-- Emails log
create table if not exists public.emails_sent (
  id uuid primary key default uuid_generate_v4(),
  recipient text not null,
  template text not null,
  status text not null,
  error_message text,
  metadata jsonb,
  created_at timestamptz not null default timezone('utc', now())
);

-- Referral stats
create table if not exists public.referral_stats (
  user_id uuid primary key references public.waitlist(id) on delete cascade,
  referral_code text not null unique,
  referral_link text not null,
  visits integer not null default 0,
  signups integer not null default 0,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create unique index if not exists referral_stats_code_idx on public.referral_stats (referral_code);
create index if not exists referral_stats_user_idx on public.referral_stats (user_id);

-- RLS and roles
alter table public.waitlist enable row level security;
alter table public.feedback enable row level security;
alter table public.emails_sent enable row level security;
alter table public.referral_stats enable row level security;

-- Create a writer role if not exists
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'cojauny_beta_writer') THEN
    CREATE ROLE cojauny_beta_writer;
  END IF;
END $$;

-- Policies
-- Allow inserts to waitlist from authenticated or service_role
DROP POLICY IF EXISTS "Permitir inserciones autenticadas en waitlist" ON public.waitlist;
CREATE POLICY "Permitir inserciones autenticadas en waitlist"
  ON public.waitlist
  FOR INSERT
  TO authenticated, service_role
  WITH CHECK (true);

DROP POLICY IF EXISTS "Permitir lectura de waitlist a service_role" ON public.waitlist;
CREATE POLICY "Permitir lectura de waitlist a service_role"
  ON public.waitlist
  FOR SELECT USING (auth.role() = 'service_role');

DROP POLICY IF EXISTS "Insert feedback" ON public.feedback;
CREATE POLICY "Insert feedback" ON public.feedback
  FOR INSERT
  TO authenticated, service_role
  WITH CHECK (true);

DROP POLICY IF EXISTS "Lectura feedback restringida" ON public.feedback;
CREATE POLICY "Lectura feedback restringida" ON public.feedback
  FOR SELECT USING (auth.role() = 'service_role');

DROP POLICY IF EXISTS "Insert emails_sent" ON public.emails_sent;
CREATE POLICY "Insert emails_sent" ON public.emails_sent
  FOR INSERT
  TO service_role
  WITH CHECK (true);

DROP POLICY IF EXISTS "Lectura emails_sent" ON public.emails_sent;
CREATE POLICY "Lectura emails_sent" ON public.emails_sent
  FOR SELECT USING (auth.role() = 'service_role');

-- Functions: anonymize_user_data
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

  return jsonb_build_object('waitlist_cleaned', coalesce(deleted_beta, 0), 'feedback_cleaned', coalesce(deleted_feedback, 0));
end;
$$ language plpgsql security definer;

grant execute on function public.anonymize_user_data(text) to service_role;

-- Referral helper functions
create or replace function public.generate_referral_code()
returns text as $$
declare
  code text;
  exists_check boolean;
begin
  loop
    code := upper(substr(md5(random()::text || clock_timestamp()::text), 1, 8));
    select exists(select 1 from public.referral_stats where referral_code = code) into exists_check;
    exit when not exists_check;
  end loop;
  return code;
end;
$$ language plpgsql security definer;

create or replace function public.create_referral_stats_for_user()
returns trigger as $$
declare
  new_code text;
  base_url text;
begin
  new_code := public.generate_referral_code();
  base_url := coalesce(current_setting('app.base_url', true), 'https://cojauny.com');
  insert into public.referral_stats (user_id, referral_code, referral_link, visits, signups)
  values (NEW.id, new_code, base_url || '?ref=' || new_code, 0, 0);
  return NEW;
end;
$$ language plpgsql security definer;

-- Trigger for create_referral_stats_for_user
DROP TRIGGER IF EXISTS create_referral_on_signup ON public.waitlist;
CREATE TRIGGER create_referral_on_signup
  AFTER INSERT ON public.waitlist
  FOR EACH ROW
  EXECUTE FUNCTION public.create_referral_stats_for_user();

-- increment_referral_visits and signups
create or replace function public.increment_referral_visits(ref_code text)
returns jsonb as $$
declare
  result_row public.referral_stats;
begin
  update public.referral_stats
  set visits = visits + 1, updated_at = timezone('utc', now())
  where referral_code = ref_code
  returning * into result_row;
  if result_row is null then
    return jsonb_build_object('error', 'Referral code not found');
  end if;
  return jsonb_build_object('success', true, 'visits', result_row.visits, 'signups', result_row.signups);
end;
$$ language plpgsql security definer;

create or replace function public.increment_referral_signups(ref_code text)
returns jsonb as $$
declare
  result_row public.referral_stats;
begin
  update public.referral_stats
  set signups = signups + 1, updated_at = timezone('utc', now())
  where referral_code = ref_code
  returning * into result_row;
  if result_row is null then
    return jsonb_build_object('error', 'Referral code not found');
  end if;
  return jsonb_build_object('success', true, 'visits', result_row.visits, 'signups', result_row.signups);
end;
$$ language plpgsql security definer;

grant execute on function public.generate_referral_code() to service_role;
grant execute on function public.increment_referral_visits(text) to service_role, authenticated, anon;
grant execute on function public.increment_referral_signups(text) to service_role;

grant select on public.referral_stats to service_role;
grant insert on public.referral_stats to service_role;
grant update on public.referral_stats to service_role;

commit;
