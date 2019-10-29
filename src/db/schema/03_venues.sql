DROP TABLE IF EXISTS venues CASCADE;
CREATE TABLE venues (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255),
  address VARCHAR(255),
  city VARCHAR(255),
  province VARCHAR(255),
  country VARCHAR(255),
  latitude DECIMAL(9,6),
  longitude DECIMAL(9,6),
  display_picture VARCHAR(255),
  phone_number VARCHAR(255),
  email VARCHAR(255),
  postal_code VARCHAR(255)
);