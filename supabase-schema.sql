-- ================================================================
--  BrainByte — Authentication Database Schema
--  Run this in your Supabase SQL Editor (Dashboard > SQL Editor)
--  URL: https://app.supabase.com/project/<your-project>/sql
-- ================================================================

-- ================================================================
-- 1. USERS TABLE
-- Stores verified user profiles linked to Supabase Auth
-- ================================================================
CREATE TABLE IF NOT EXISTS public.bb_users (
  id            UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  auth_id       UUID        REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name     TEXT        NOT NULL,
  email         TEXT        UNIQUE NOT NULL,
  phone_number  TEXT        UNIQUE NOT NULL,
  phone_verified    BOOLEAN DEFAULT FALSE,
  email_verified    BOOLEAN DEFAULT FALSE,
  role          TEXT        DEFAULT 'student' CHECK (role IN ('student', 'instructor', 'admin')),
  bio           TEXT        DEFAULT '',
  avatar_url    TEXT,
  created_at    TIMESTAMPTZ DEFAULT NOW(),
  last_login    TIMESTAMPTZ,
  is_active     BOOLEAN     DEFAULT TRUE
);

-- Performance indexes
CREATE INDEX IF NOT EXISTS idx_bb_users_email    ON public.bb_users (LOWER(email));
CREATE INDEX IF NOT EXISTS idx_bb_users_phone    ON public.bb_users (phone_number);
CREATE INDEX IF NOT EXISTS idx_bb_users_auth_id  ON public.bb_users (auth_id);

-- Enable RLS
ALTER TABLE public.bb_users ENABLE ROW LEVEL SECURITY;

-- Policies
DROP POLICY IF EXISTS "bb_users_insert_anon"          ON public.bb_users;
DROP POLICY IF EXISTS "bb_users_select_all"           ON public.bb_users;
DROP POLICY IF EXISTS "bb_users_update_own"           ON public.bb_users;

CREATE POLICY "bb_users_insert_anon"
  ON public.bb_users FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "bb_users_select_all"
  ON public.bb_users FOR SELECT TO anon, authenticated USING (true);

CREATE POLICY "bb_users_update_own"
  ON public.bb_users FOR UPDATE TO authenticated
  USING (auth.uid() = auth_id);


-- ================================================================
-- 2. OTP VERIFICATIONS TABLE
-- Stores hashed OTPs for phone (signup) and email (login)
-- ================================================================
CREATE TABLE IF NOT EXISTS public.bb_otp_verifications (
  id            UUID        DEFAULT gen_random_uuid() PRIMARY KEY,
  recipient     TEXT        NOT NULL,
  otp_type      TEXT        NOT NULL CHECK (otp_type IN ('phone', 'email')),
  code_hash     TEXT        NOT NULL,
  expires_at    TIMESTAMPTZ NOT NULL,
  attempts      INTEGER     DEFAULT 0,
  max_attempts  INTEGER     DEFAULT 5,
  verified      BOOLEAN     DEFAULT FALSE,
  created_at    TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_otp_lookup  ON public.bb_otp_verifications (LOWER(recipient), otp_type, verified);
CREATE INDEX IF NOT EXISTS idx_otp_expiry  ON public.bb_otp_verifications (expires_at);

-- Enable RLS
ALTER TABLE public.bb_otp_verifications ENABLE ROW LEVEL SECURITY;

-- Policies (anon access required for client-side OTP operations)
DROP POLICY IF EXISTS "otp_insert_anon"  ON public.bb_otp_verifications;
DROP POLICY IF EXISTS "otp_select_anon"  ON public.bb_otp_verifications;
DROP POLICY IF EXISTS "otp_update_anon"  ON public.bb_otp_verifications;
DROP POLICY IF EXISTS "otp_delete_anon"  ON public.bb_otp_verifications;

CREATE POLICY "otp_insert_anon"  ON public.bb_otp_verifications FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "otp_select_anon"  ON public.bb_otp_verifications FOR SELECT TO anon USING (true);
CREATE POLICY "otp_update_anon"  ON public.bb_otp_verifications FOR UPDATE TO anon USING (true);
CREATE POLICY "otp_delete_anon"  ON public.bb_otp_verifications FOR DELETE TO anon USING (true);


-- ================================================================
-- 3. CLEANUP FUNCTION
-- Removes expired and verified OTP records
-- Schedule this via pg_cron or call it periodically
-- ================================================================
CREATE OR REPLACE FUNCTION public.bb_cleanup_otps()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  DELETE FROM public.bb_otp_verifications
  WHERE expires_at < NOW()
     OR (verified = TRUE AND created_at < NOW() - INTERVAL '1 hour');
END;
$$;

-- ================================================================
-- 4. HELPER: Check duplicate email/phone (returns JSON)
-- ================================================================
CREATE OR REPLACE FUNCTION public.bb_check_duplicate(p_email TEXT, p_phone TEXT)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  email_exists BOOLEAN;
  phone_exists BOOLEAN;
BEGIN
  SELECT EXISTS(SELECT 1 FROM public.bb_users WHERE LOWER(email) = LOWER(p_email)) INTO email_exists;
  SELECT EXISTS(SELECT 1 FROM public.bb_users WHERE phone_number = p_phone) INTO phone_exists;
  
  RETURN jsonb_build_object(
    'email_exists', email_exists,
    'phone_exists', phone_exists
  );
END;
$$;

-- ================================================================
-- DONE! Copy the above and run it in Supabase SQL Editor.
-- ================================================================
