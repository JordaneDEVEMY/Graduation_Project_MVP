-- Revert olleks:08_Function_Insert_user from pg

BEGIN;

CREATE FUNCTION "insert_user" ( 
    firstname text, 
    lastname text, 
    email text, 
    password text, 
    phone_number text, 
    mobile_number text, 
    address text, 
    zip_code int, 
    date_of_birth timestamptz, 
    social_security_number text, 
    starting_date timestamptz, 
    function text, 
    avatar text, 
    role_application text, 
    employee_qualification_id int
    ) RETURNS int AS $$
    INSERT INTO "employee" 
        (
          "firstname",
          "lastname",
          "email",
          "password",
          "phone_number",
          "mobile_number",
          "address",
          "zip_code",
          "date_of_birth",
          "social_security_number",
          "starting_date",
          "function",
          "avatar",
          "role_application",
          "employee_qualification_id"
        )
        VALUES (
          $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15
        )
        RETURNING*

$$ LANGUAGE 'plpgsql';

COMMIT;
