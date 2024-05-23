-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- Link to schema: https://app.quickdatabasediagrams.com/#/d/hMfzjA
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "Mainsheet" (
    "DemographicID" int   NOT NULL,
    "Date" int   NOT NULL,
    "IssueID" int   NOT NULL,
    "Percentage" int   NOT NULL,
    CONSTRAINT "pk_Mainsheet" PRIMARY KEY (
        "Date"
     )
);

CREATE TABLE "Year" (
    "year_election" int   NOT NULL,
    "Date" int   NOT NULL,
    CONSTRAINT "pk_Year" PRIMARY KEY (
        "year_election"
     )
);

CREATE TABLE "Poldem" (
    "year_election" int   NOT NULL,
    "title_art" varchar(500)   NOT NULL,
    "sentence" varchar(500)   NOT NULL
);

CREATE TABLE "Demographic" (
    "Demographic" varchar(30)   NOT NULL,
    "DemographicID" int   NOT NULL,
    CONSTRAINT "pk_Demographic" PRIMARY KEY (
        "DemographicID"
     )
);

CREATE TABLE "Issue" (
    "Issue" varchar(30)   NOT NULL,
    "IssueID" int   NOT NULL,
    CONSTRAINT "pk_Issue" PRIMARY KEY (
        "IssueID"
     )
);

ALTER TABLE "Mainsheet" ADD CONSTRAINT "fk_Mainsheet_DemographicID" FOREIGN KEY("DemographicID")
REFERENCES "Demographic" ("DemographicID");

ALTER TABLE "Mainsheet" ADD CONSTRAINT "fk_Mainsheet_IssueID" FOREIGN KEY("IssueID")
REFERENCES "Issue" ("IssueID");

ALTER TABLE "Year" ADD CONSTRAINT "fk_Year_Date" FOREIGN KEY("Date")
REFERENCES "Mainsheet" ("Date");

ALTER TABLE "Poldem" ADD CONSTRAINT "fk_Poldem_year_election" FOREIGN KEY("year_election")
REFERENCES "Year" ("year_election");

