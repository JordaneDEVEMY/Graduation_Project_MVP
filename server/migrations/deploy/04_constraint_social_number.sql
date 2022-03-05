-- Deploy olleks:04_constraint_social_number to pg

BEGIN;

CREATE DOMAIN num_ss_fr AS text
    CHECK(
        VALUE ~ '^[1-2][0-9][0-9][0-1][1-9][0-9][0-9]\d{8}'
    );

COMMIT;
                