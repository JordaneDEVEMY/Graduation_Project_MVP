-- Deploy olleks:04_constraint_social_number to pg

BEGIN;

CREATE DOMAIN posint AS int
CHECK (VALUE > 0);

COMMIT;
