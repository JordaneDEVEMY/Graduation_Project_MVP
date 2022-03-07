-- Deploy olleks:01_init_db to pg

BEGIN;

CREATE TABLE "employee_qualification" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "label" TEXT NOT NULL UNIQUE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "absence" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "reason" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "employee" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "social_security_number" TEXT NOT NULL UNIQUE,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "date_of_birth" TIMESTAMPTZ NOT NULL,
    "address" TEXT NOT NULL,
    "zip_code" INT NOT NULL,
    "email" TEXT NOT NULL UNIQUE,
    "mobile_number" TEXT NOT NULL,
    "phone_number" TEXT,
    "password" TEXT NOT NULL,
    "starting_date" DATE NOT NULL DEFAULT now(),
    "avatar" TEXT,
    "function" TEXT NOT NULL,
    "role_application" TEXT NOT NULL,
    "employee_qualification_id" INT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "assignment" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "starting_date" TIMESTAMPTZ NOT NULL,
    "ending_date" TIMESTAMPTZ NOT NULL,
    "color" TEXT,
    "position" INT NOT NULL DEFAULT 0,
    "visibility" BOOLEAN DEFAULT false,
    "employee_id" INT NOT NULL,
    "absence_id" INT,
    "site_id" INT,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "employee_contract" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "type_of_contract" TEXT NOT NULL,
    "starting_date" TIMESTAMPTZ NOT NULL,
    "duration" INT,
    "company_id" INT,
    "employee_id" INT,    
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "site" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "zip_code" INT NOT NULL,
    "manager_name" TEXT,
    "estimated_duration" INT,
    "company_id" INT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "contact" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "email" TEXT NOT NULL UNIQUE,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "phone_number" TEXT,
    "mobile_number" TEXT NOT NULL UNIQUE,
    "function" TEXT NOT NULL,
    "company_id" INT NOT NULL UNIQUE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "company" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL UNIQUE,
    "address" TEXT NOT NULL UNIQUE,
    "zip_code" INT NOT NULL,
    "type" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);


ALTER TABLE "employee" ADD FOREIGN KEY ("employee_qualification_id") REFERENCES "employee_qualification" ("id") ON DELETE CASCADE;
ALTER TABLE "assignment" ADD FOREIGN KEY ("employee_id") REFERENCES "employee" ("id") ON DELETE CASCADE;
ALTER TABLE "assignment" ADD FOREIGN KEY ("site_id") REFERENCES "site" ("id") ON DELETE CASCADE;
ALTER TABLE "assignment" ADD FOREIGN KEY ("absence_id") REFERENCES "absence" ("id") ON DELETE CASCADE;
ALTER TABLE "employee_contract" ADD FOREIGN KEY ("company_id") REFERENCES "company" ("id") ON DELETE CASCADE;
ALTER TABLE "employee_contract" ADD FOREIGN KEY ("employee_id") REFERENCES "employee" ("id") ON DELETE CASCADE;
ALTER TABLE "site" ADD FOREIGN KEY ("company_id") REFERENCES "company" ("id") ON DELETE CASCADE;
ALTER TABLE "contact" ADD FOREIGN KEY ("company_id") REFERENCES "company" ("id") ON DELETE CASCADE;

COMMIT;
