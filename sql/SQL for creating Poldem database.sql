-- Table: public.Poldem Data

-- DROP TABLE IF EXISTS public."Poldem Data";

CREATE TABLE IF NOT EXISTS public."Poldem Data"
(
    "Country" text COLLATE pg_catalog."default",
    iso2code text COLLATE pg_catalog."default",
    country_year text COLLATE pg_catalog."default",
    year_election text COLLATE pg_catalog."default",
    election_date date,
    election_type text COLLATE pg_catalog."default",
    source_type text COLLATE pg_catalog."default",
    source_name text COLLATE pg_catalog."default",
    title_art text COLLATE pg_catalog."default",
    date_art date,
    page_art text COLLATE pg_catalog."default",
    section_art text COLLATE pg_catalog."default",
    words_art text COLLATE pg_catalog."default",
    sentence text COLLATE pg_catalog."default",
    type_cs text COLLATE pg_catalog."default",
    subject_function text COLLATE pg_catalog."default",
    subject_party text COLLATE pg_catalog."default",
    subject_individual text COLLATE pg_catalog."default",
    direction numeric,
    object_function text COLLATE pg_catalog."default",
    object_party text COLLATE pg_catalog."default",
    object_individual text COLLATE pg_catalog."default",
    issue_cat text COLLATE pg_catalog."default",
    issue_subcat text COLLATE pg_catalog."default",
    party_id numeric,
    party_name text COLLATE pg_catalog."default",
    party_name_short text COLLATE pg_catalog."default",
    vote_share numeric,
    seats numeric,
    seats_total numeric,
    cmp numeric,
    euprofiler numeric,
    ees numeric,
    castles_mair numeric,
    huber_inglehart numeric,
    ray numeric,
    benoit_laver numeric,
    chess numeric
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Poldem Data"
    OWNER to postgres;