-- Deploy olleks:10_Function_Insert_Comapny to pg

BEGIN;

CREATE OR REPLACE FUNCTION insert_company (s json) RETURNS company AS $$
	
		INSERT INTO "company"
			(
				"name",
				"address",
				"zip_code",
				"type"
			)
			VALUES (
				(s->> 'name')::text,
				(s->> 'address')::text,
				(s->> 'zip_code')::int,
				(s->> 'type')::text
			) RETURNING *;

$$ LANGUAGE sql;

COMMIT;
