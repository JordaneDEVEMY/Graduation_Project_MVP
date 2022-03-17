-- Revert olleks:01_init_db from pg

BEGIN;


DROP TABLE
"company", 
"contact", 
"site", 
"employee_contract", 
"assignment", 
"employee", 
"absence",
"employee_qualification" CASCADE; 

DROP DOMAIN num_ss_fr;
DROP DOMAIN posint;
DROP DOMAIN check_age;

-- DROP VIEW get_user_rest,get_Week_admin_planning,get_user_colleagues,get_user_by_admin ;

-- DROP VIEW get_Week_admin_planning;

-- DROP VIEW get_user_colleagues;

-- DROP VIEW get_user_by_admin;
COMMIT;
