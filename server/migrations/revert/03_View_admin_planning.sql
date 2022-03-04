-- Revert olleks:03_View_admin_planning from pg

BEGIN;

DROP VIEW get_week_admin_planning;

COMMIT;
