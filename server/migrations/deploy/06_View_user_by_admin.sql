-- Deploy olleks:06_View_user_by_admin to pg

BEGIN;

CREATE VIEW get_user_by_admin AS
    SELECT 
            "employee"."id", 
            "employee"."firstname", 
            "employee"."lastname", 
            "employee"."email", 
            "employee"."phone_number", 
            "employee"."mobile_number", 
            "employee"."address", 
            "employee"."zip_code", 
            "employee"."social_security_number", 
            "employee"."date_of_birth", 
            "employee"."starting_date", 
            "employee"."avatar", 
            "employee"."function", 
            "employee"."role_application", 
            "employee_qualification"."label" AS qualification_label
        FROM "employee"
        LEFT JOIN "employee_qualification" ON "employee"."employee_qualification_id" = "employee_qualification"."id";
COMMIT;
