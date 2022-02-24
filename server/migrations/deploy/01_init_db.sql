-- Deploy olleks:01_init_db to pg

BEGIN;

CREATE TABLE "Qualification_Employe" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "nom" TEXT NOT NULL UNIQUE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "Absence" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "motif", TEXT NOT NULL
    "date_de_début" DATE NOT NULL,
    "date_de_fin_previsionnelle" DATE NOT NULL,
    "date_de_fin_reelle" DATE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "Employe" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "numero_de_securite_social" INT NOT NULL UNIQUE,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "date_de_naissance" DATE NOT NULL,
    "adresse" TEXT NOT NULL,
    "adresse_mail" TEXT NOT NULL UNIQUE,
    "mot_de_passe_site" TEXT NOT NULL,
    "date_d_entree" DATE NOT NULL DEFAULT now(),
    "avatar" TEXT,
    "poste" TEXT NOT NULL,
    "role_application" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "Affectation" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "date_de_debut" DATE NOT NULL,
    "duree" INT NOT NULL,
    "couleur" TEXT,
    "position" INT NOT NULL DEFAULT 0,
    "visibilite" BOOLEAN,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "Contrat_Employe" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "type_de_contrat" TEXT NOT NULL,
    "debut_contrat" DATE NOT NULL,
    "duree_contrat" DATE,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "Site" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "denomination" TEXT NOT NULL UNIQUE,
    "adresse" TEXT NOT NULL UNIQUE,
    "nom_du_responsable" TEXT,
    "duree_previsionnelle" INT,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "Contact" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "adresse_mail" TEXT NOT NULL UNIQUE,
    "nom" TEXT NOT NULL,
    "prénom" TEXT NOT NULL,
    "numero_de_telephone_fixe" TEXT,
    "numero_de_telephone_portable" TEXT NOT NULL UNIQUE,
    "fonction" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

CREATE TABLE "Entreprise" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "denomination" TEXT NOT NULL UNIQUE,
    "adresse" TEXT NOT NULL UNIQUE,
    "type" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
    "updated_at" TIMESTAMPTZ
);

COMMIT;
