-- Revert olleks:01_init_db from pg

BEGIN;

DROP DOMAIN posint;

DROP TABLE 
 
"company", 
"contact", 
"site", 
"employee_contract", 
"assignment", 
"employee", 
"absence",
"employee_qualification" CASCADE; 

COMMIT;
