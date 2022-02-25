BEGIN;

INSERT INTO "employee_qualification" ("label")
VALUES
  ('lorem'),
  ('egestas'),
  ('luctus'),
  ('malesuada.'),
  ('cursus,');

INSERT INTO "absence" ("reason","starting_date","estimated_end_date","end_date","assignment_id")
VALUES
  ('vitae','19/02/2021','27/04/2022','12/03/2021',35),
  ('et','19/02/2021','12/08/2021','20/10/2022',4),
  ('nunc.','18/02/2021','24/09/2021','20/08/2022',27),
  ('nec,','19/02/2021','02/04/2022','31/03/2022',15),
  ('ac','19/02/2021','10/06/2022','14/10/2021',30);


COMMIT;
