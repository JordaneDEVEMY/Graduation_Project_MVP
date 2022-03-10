-- Deploy olleks:16_DOMAIN_posint to pg

BEGIN;

CREATE DOMAIN posint AS int
    CHECK(VALUE > 0);
COMMIT;
