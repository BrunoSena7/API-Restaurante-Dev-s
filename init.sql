DO $$
BEGIN
  IF NOT EXISTS (SELECT FROM pg_catalog.pg_roles WHERE rolname = 'devs_user') THEN
    CREATE ROLE devs_user LOGIN PASSWORD 'devs_pass' SUPERUSER CREATEDB CREATEROLE;
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (SELECT FROM pg_database WHERE datname = 'devs_db') THEN
    CREATE DATABASE devs_db OWNER devs_user;
  END IF;
END $$;

GRANT ALL PRIVILEGES ON DATABASE devs_db TO devs_user;
