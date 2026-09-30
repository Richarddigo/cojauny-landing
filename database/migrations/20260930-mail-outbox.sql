-- Apply before deploying the API changes. Non-destructive and repeatable.
CREATE TABLE IF NOT EXISTS mail_outbox (
  id text PRIMARY KEY,
  payload jsonb NOT NULL,
  attempts integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  next_attempt_at timestamptz NOT NULL DEFAULT now(),
  sent_at timestamptz
);
CREATE INDEX IF NOT EXISTS mail_outbox_pending ON mail_outbox(next_attempt_at) WHERE sent_at IS NULL;
-- Restrict table access to the application/service role. Payloads contain personal data.

-- Keep erasure requests from leaving notification copies queued for delivery.
CREATE OR REPLACE FUNCTION anonymize_user_data(target_email text) RETURNS jsonb AS $$
DECLARE
  waitlist_count int;
  feedback_count int;
BEGIN
  DELETE FROM mail_outbox WHERE id IN (
    SELECT 'beta-user-' || id::text FROM waitlist WHERE lower(email) = lower(target_email)
    UNION ALL SELECT 'beta-admin-' || id::text FROM waitlist WHERE lower(email) = lower(target_email)
    UNION ALL SELECT 'feedback-user-' || id::text FROM feedback WHERE lower(email) = lower(target_email)
    UNION ALL SELECT 'feedback-admin-' || id::text FROM feedback WHERE lower(email) = lower(target_email)
  );
  WITH changed AS (
    UPDATE waitlist SET email = concat('anon-', id::text, '@example.com'), full_name = 'Deleted',
      use_case = NULL, home_airport = NULL, ip_address = NULL, user_agent = NULL, updates_opt_in = false
    WHERE lower(email) = lower(target_email) RETURNING 1
  ) SELECT count(*) INTO waitlist_count FROM changed;
  WITH changed AS (
    UPDATE feedback SET email = concat('anon-', id::text, '@example.com'), name = 'Deleted',
      message = '[Deleted at user request]', topic = NULL, ip_address = NULL, user_agent = NULL
    WHERE lower(email) = lower(target_email) RETURNING 1
  ) SELECT count(*) INTO feedback_count FROM changed;
  RETURN jsonb_build_object('waitlist_cleaned', waitlist_count, 'feedback_cleaned', feedback_count);
END;
$$ LANGUAGE plpgsql;
