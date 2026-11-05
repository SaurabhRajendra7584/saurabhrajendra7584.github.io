/*
# Create contact_submissions table

1. New Tables
- `contact_submissions`
  - `id` (uuid, primary key)
  - `full_name` (text, not null) - sender's full name
  - `email` (text, not null) - sender's email address
  - `subject` (text, not null) - message subject line
  - `message` (text, not null) - the message body
  - `is_read` (boolean, default false) - tracks whether the submission has been reviewed
  - `created_at` (timestamptz, default now()) - submission timestamp

2. Security
- Enable RLS on `contact_submissions`.
- Grant INSERT to `anon, authenticated` so the public contact form can submit.
- Grant SELECT to `authenticated` only — submissions are private, viewable by the site owner after sign-in via the Supabase dashboard.
- No UPDATE or DELETE grants from the public; only `service_role` can manage submissions.
- INSERT policy: anyone (anon + authenticated) can insert new submissions.
- SELECT policy: only authenticated users can read submissions (owner via Supabase dashboard).
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  is_read boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON contact_submissions TO anon, authenticated;
GRANT SELECT ON contact_submissions TO authenticated;

DROP POLICY IF EXISTS "anon_can_insert_submissions" ON contact_submissions;
CREATE POLICY "anon_can_insert_submissions"
  ON contact_submissions FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

DROP POLICY IF EXISTS "authenticated_can_read_submissions" ON contact_submissions;
CREATE POLICY "authenticated_can_read_submissions"
  ON contact_submissions FOR SELECT
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at
  ON contact_submissions (created_at DESC);
