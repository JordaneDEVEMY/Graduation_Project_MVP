-- Revert olleks:01_init_db from pg

BEGIN;

DROP TABLE 
"qualification_employe", "absence", "employe", "affectation", "contrat_employe", "site", "contact", "entreprise"; 

COMMIT;
