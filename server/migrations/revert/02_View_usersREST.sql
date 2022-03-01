-- Revert olleks:02_View_usersREST from pg

BEGIN;

DROP FUNCTION get_user_rest(int);

COMMIT;
