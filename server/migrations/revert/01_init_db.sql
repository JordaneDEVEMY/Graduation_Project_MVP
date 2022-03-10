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

DROP DOMAIN posint;


COMMIT;
