-- Revert olleks:16_DOMAIN_posint from pg

BEGIN;

DROP DOMAIN posint;

COMMIT;
