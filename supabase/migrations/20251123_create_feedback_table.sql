-- Create feedback table
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

-- Create indexes
create index if not exists feedback_sentiment_idx on public.feedback (sentiment);
create index if not exists feedback_created_idx on public.feedback (created_at);

-- Enable RLS
alter table public.feedback enable row level security;

-- Create policies
drop policy if exists "Insert feedback" on public.feedback;
create policy "Insert feedback" on public.feedback
    for insert
    to authenticated, service_role
    with check (true);

drop policy if exists "Lectura feedback restringida" on public.feedback;
create policy "Lectura feedback restringida"
    on public.feedback
    for select using (auth.role() = 'service_role');

-- Grant permissions (if needed for specific roles, otherwise service_role has access)
-- grant insert on public.feedback to service_role;
