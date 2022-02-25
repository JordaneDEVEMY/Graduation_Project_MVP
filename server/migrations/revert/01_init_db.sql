-- Revert olleks:01_init_db from pg

BEGIN;

DROP TABLE 
"employee_qualification", "absence", "employee", "assignment", "employee_contract", "site", "contact", "company"; 

COMMIT;
