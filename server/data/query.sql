-- EMPLOYEE
--Récupération des informations d'un employé avec son id		
SELECT * FROM "employee" WHERE "id" = $1;
-- Modification des informations d'un employée avec son id
UPDATE "employee" SET "$1"= '$2' WHERE "id"= $3 ;
-- Suppression d'un employé
DELETE FROM "employee" WHERE "id" = '$1' RETURNING *



-- COMPANY
--Récupération des informations d'une entreprise avec son id		
SELECT * FROM "company" WHERE "id" = $1;
-- Modification des informations d'une entreprise'
UPDATE "company" SET "$1"= '$2' WHERE "id"= $3 ;
-- Suppression d'une entreprise
DELETE FROM "employee" WHERE "id" = '$1' RETURNING *



-- SITE
-- Récupération des informations d'un site avec son id	
SELECT * FROM "site" WHERE "id" = $1;
-- Modification des informations d'un site
UPDATE "site" SET "$1"= '$2' WHERE "id"= $3 ;
-- Suppression d'un site
DELETE FROM "site" WHERE "id" = '$1' RETURNING *;
