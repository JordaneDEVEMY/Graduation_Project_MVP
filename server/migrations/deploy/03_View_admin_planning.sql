-- Deploy olleks:03_View_admin_planning to pg

BEGIN;

CREATE VIEW get_week_admin_planning AS
    SELECT
	"company"."id" AS company_id,
	"company"."name" AS company_name,
	json_agg( 
		json_build_object(
			'id',"site"."id" ,
			'site_name', "site"."name",
			'assignment', 
                json_build_object(
                    'id', "assignment"."id",
                    'starting_date', "assignment"."starting_date",
                    'ending_date', "assignment"."ending_date",
                    'color', "assignment"."color",
                    'position', "assignment"."position",
                    'visibility', "assignment"."visibility",
                    'employee', 
                        json_build_object(
                            'id', "employee"."id",
                            'firstname', "employee"."firstname",
                            'lastname', "employee"."lastname"
                        )

			)
		)
	) AS sites
FROM "company"
LEFT JOIN "site" ON "site"."company_id" = "company"."id"
LEFT JOIN "assignment" ON "site"."id" = "assignment"."site_id"
LEFT JOIN "employee" ON "employee"."id" = "assignment"."employee_id"
WHERE "assignment"."starting_date" = assignment.starting_date  
AND "assignment"."ending_date" = assignment.starting_date 
GROUP BY "company"."id";

COMMIT;
