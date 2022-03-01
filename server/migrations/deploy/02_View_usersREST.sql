-- Deploy olleks:02_View_usersREST to pg

BEGIN;

CREATE VIEW get_user_rest AS

    SELECT 
        "employee"."id", 
        "employee"."social_security_number", 
        "employee"."date_of_birth", 
        "employee"."address", 
        "employee"."zip_code", 
        "employee"."starting_date", 
        "employee"."function", 
        "employee"."employee_qualification_id",
        "employee_qualification"."label",
        array_agg
            (
            json_build_object(
                'id',
                    "assignment"."id", 
                'starting_date',
                    "assignment"."starting_date",
                'ending_date',
                    "assignment"."ending_date",
                'absence',
                    json_build_object(
                        'id',
                            "absence"."id",
                        'reason',
                            "absence"."reason"
                    ),
                'site',
                    json_build_object(
                        'id',
                            "site"."id",
                        'name',
                            "site"."name",
                        'address',
                            "site"."address",
                        'zip_code',
                            "site"."zip_code",
                        'manager_name',
                            "site"."manager_name",
                        'company',
                    json_build_object(
                        'id',
                            "company"."id",
                        'name',
                            "company"."name"
                    )
                    )
            )
        ) AS assignements
    FROM "employee"
    LEFT JOIN "employee_qualification" ON "employee"."employee_qualification_id" = "employee_qualification"."id"
    LEFT JOIN "assignment" ON "assignment"."employee_id" = "employee"."id"
    LEFT JOIN "site" ON "site"."assignment_id" = "assignment"."id"
    LEFT JOIN "absence" ON "absence"."assignment_id" = "assignment"."id"
    LEFT JOIN "company" ON "company"."id" = "site"."company_id"
    WHERE "employee"."id" = employee.id
    GROUP BY "employee"."id", "employee_qualification"."label"
    ORDER BY "employee";
COMMIT;
