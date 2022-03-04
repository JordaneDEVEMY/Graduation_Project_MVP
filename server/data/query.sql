-- EMPLOYEE
-- Récupération des informations d'un employé avec son id		
SELECT * FROM "employee" WHERE "id" = $1;
-- Modification des informations d'un employée avec son id
UPDATE "employee" SET "$1" = '$2' WHERE "id"= $3 ;
-- Ajout d'un employée
INSERT INTO "employee" ("social_security_number","firstname","lastname","date_of_birth","address","zip_code","email","password","avatar","function","role_application","employee_qualification_id")
VALUES
('$1','$2','$3','$4','$5','$6','$7','$8','$9','$10','$11','$12'),
-- Suppression d'un employé
DELETE FROM "employee" WHERE "id" = '$1' RETURNING *

-----------------------------------------------------------------------------------------------------------------

-- COMPANY
-- Récupération des informations d'une entreprise avec son id		
SELECT * FROM "company" WHERE "id" = $1;
-- Modification des informations d'une entreprise'
UPDATE "company" SET "$1" = '$2' WHERE "id"= $3 ;
-- Ajout d'une entreprises
INSERT INTO "company" ("name","address","zip_code","type")
VALUES
('$1','$2','$3','$4')
-- Suppression d'une entreprise
DELETE FROM "employee" WHERE "id" = '$1' RETURNING *

-----------------------------------------------------------------------------------------------------------------

-- SITE
-- Récupération des informations d'un site avec son id	
SELECT * FROM "site" WHERE "id" = $1;
-- Modification des informations d'un site
UPDATE "site" SET "$1" = '$2' WHERE "id"= $3 ;
-- Ajout d'un site
INSERT INTO "site" ("name","address","zip_code","manager_name","estimated_duration","assignment_id","company_id")
VALUES
('$1','$2','$3','$4','$5','$6','$7')
-- Suppression d'un site
DELETE FROM "site" WHERE "id" = '$1' RETURNING *;



-----------------------------------------------------------------------------------------------------------------
-- 
-- Récupération des employées travaillant sur un site donnée entre 2 dates	
SELECT
	"employee"."id",
	"employee"."firstname",
	"employee"."lastname",
	"assignment"."starting_date",
	"assignment"."ending_date"
FROM "employee"
LEFT JOIN "assignment" ON "employee"."id" = "assignment"."employee_id"
WHERE "assignment"."site_id" = assignment.site_id
	AND "assignment"."starting_date" = assignment.starting_date
	AND "assignment"."ending_date" = assignment.ending_date;
