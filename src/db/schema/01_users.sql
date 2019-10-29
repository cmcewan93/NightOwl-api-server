DROP TABLE IF EXISTS visits CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  age VARCHAR(255) NOT NULL,
  gender VARCHAR(255) NOT NULL,
  UNIQUE (email)
);