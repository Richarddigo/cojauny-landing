-- ============================================================
-- Cojauny Landing — Neon Postgres schema (migrated from Supabase)
-- Run this in your Neon console: https://console.neon.tech → SQL Editor
-- ============================================================

-- NOTE: pgcrypto NOT needed — gen_random_uuid() is native in Postgres 13+

-- ─── waitlist ─────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS waitlist (
    id                  uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    email               text NOT NULL,
    full_name           text NOT NULL,
    use_case            text,
    country             text NOT NULL DEFAULT 'es',
    flight_frequency    text NOT NULL DEFAULT 'once',
    home_airport        text,
    updates_opt_in      boolean NOT NULL DEFAULT false,
    terms_accepted      boolean NOT NULL DEFAULT false,
    privacy_accepted    boolean NOT NULL DEFAULT false,
    locale              text NOT NULL DEFAULT 'es',
    referral_code_used  text,
    ip_address          inet,
    user_agent          text,
    created_at          timestamptz NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX IF NOT EXISTS waitlist_email_idx ON waitlist (lower(email));
CREATE INDEX IF NOT EXISTS waitlist_created_idx ON waitlist (created_at DESC);

-- ─── feedback ─────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS feedback (
    id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    email       text NOT NULL,
    name        text NOT NULL,
    message     text NOT NULL,
    usecase     text NOT NULL CHECK (usecase IN ('feedback','idea','business_proposal','contact')),
    topic       text,
    locale      text NOT NULL DEFAULT 'es',
    ip_address  inet,
    user_agent  text,
    created_at  timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS feedback_usecase_idx ON feedback (usecase);
CREATE INDEX IF NOT EXISTS feedback_created_idx ON feedback (created_at DESC);

-- ─── referral_stats ───────────────────────────────────────────
CREATE TABLE IF NOT EXISTS referral_stats (
    waitlist_id    uuid PRIMARY KEY REFERENCES waitlist(id) ON DELETE CASCADE,
    referral_code  text NOT NULL UNIQUE,
    referral_link  text NOT NULL,
    visits         integer NOT NULL DEFAULT 0,
    signups        integer NOT NULL DEFAULT 0,
    created_at     timestamptz NOT NULL DEFAULT now(),
    updated_at     timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS referral_stats_code_idx ON referral_stats (referral_code);

-- ─── helpers ──────────────────────────────────────────────────
-- Generate a unique 8-char alphanumeric referral code
CREATE OR REPLACE FUNCTION generate_referral_code() RETURNS text AS $$
DECLARE
    code text;
    exists_check boolean;
BEGIN
    LOOP
        code := upper(substr(md5(random()::text || clock_timestamp()::text), 1, 8));
        SELECT EXISTS(SELECT 1 FROM referral_stats WHERE referral_code = code) INTO exists_check;
        EXIT WHEN NOT exists_check;
    END LOOP;
    RETURN code;
END;
$$ LANGUAGE plpgsql;

-- Auto-create referral stats when a user joins the waitlist
CREATE OR REPLACE FUNCTION create_referral_stats_for_user() RETURNS trigger AS $$
DECLARE
    new_code text;
    base_url text := 'https://cojauny.com';
BEGIN
    new_code := generate_referral_code();
    INSERT INTO referral_stats (waitlist_id, referral_code, referral_link, visits, signups)
    VALUES (NEW.id, new_code, base_url || '?ref=' || new_code, 0, 0);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS create_referral_on_signup ON waitlist;
CREATE TRIGGER create_referral_on_signup
    AFTER INSERT ON waitlist
    FOR EACH ROW
    EXECUTE FUNCTION create_referral_stats_for_user();

-- Increment referral visits counter
CREATE OR REPLACE FUNCTION increment_referral_visits(ref_code text) RETURNS jsonb AS $$
DECLARE
    row_data referral_stats;
BEGIN
    UPDATE referral_stats
       SET visits = visits + 1, updated_at = now()
     WHERE referral_code = ref_code
     RETURNING * INTO row_data;
    IF row_data IS NULL THEN
        RETURN jsonb_build_object('error', 'Referral code not found');
    END IF;
    RETURN jsonb_build_object('success', true, 'visits', row_data.visits, 'signups', row_data.signups);
END;
$$ LANGUAGE plpgsql;

-- GDPR right-to-erasure (anonymise instead of delete to preserve aggregate metrics)
CREATE OR REPLACE FUNCTION anonymize_user_data(target_email text) RETURNS jsonb AS $$
DECLARE
    waitlist_count int;
    feedback_count int;
BEGIN
    WITH upd AS (
        UPDATE waitlist
           SET email = concat('anon-', md5(email || now()::text), '@example.com'),
               full_name = 'Eliminado',
               use_case = NULL
         WHERE lower(email) = lower(target_email)
         RETURNING 1
    )
    SELECT count(*) INTO waitlist_count FROM upd;

    WITH upd AS (
        UPDATE feedback
           SET email = concat('anon-', md5(email || now()::text), '@example.com'),
               name = 'Eliminado',
               message = '[Contenido eliminado por petición del usuario]'
         WHERE lower(email) = lower(target_email)
         RETURNING 1
    )
    SELECT count(*) INTO feedback_count FROM upd;

    RETURN jsonb_build_object('waitlist_cleaned', waitlist_count, 'feedback_cleaned', feedback_count);
END;
$$ LANGUAGE plpgsql;
