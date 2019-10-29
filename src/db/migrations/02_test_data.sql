--- USERS Table ---

INSERT INTO users
  (first_name, last_name, email, password, age, gender)
VALUES
  ('Alice', 'Test', 'alice@gmail.com', 'password', 22, 'Female');
INSERT INTO users
  (first_name, last_name, email, password, age, gender)
VALUES
  ('Kira', 'Test', 'kira@gmail.com', 'password', 24, 'Female');
INSERT INTO users
  (first_name, last_name, email, password, age, gender)
VALUES
  ('Colin', 'Test', 'colin-mcewan@hotmail..com', 'password', 26, 'Male');
INSERT INTO users
  (first_name, last_name, email, password, age, gender)
VALUES
  ('Matt', 'Test', 'matt@gmail.com', 'password', 31, 'Male');
INSERT INTO users
  (first_name, last_name, email, password, age, gender)
VALUES
  ('Alex', 'Test', 'alex@gmail.com', 'password', 19, 'Male');
INSERT INTO users
  (first_name, last_name, email, password, age, gender)
VALUES
  ('Dylan', 'Test', 'dylan@gmail.com', 'password', 21, 'Male');
INSERT INTO users
  (first_name, last_name, email, password, age, gender)
VALUES
  ('Kim', 'Test', 'kim123@gmail.com', 'password', 22, 'Female');
INSERT INTO users
  (first_name, last_name, email, password, age, gender)
VALUES
  ('Kyle', 'Test', 'kyle@gmail.com', 'password', 28, 'Male');
INSERT INTO users
  (first_name, last_name, email, password, age, gender)
VALUES
  ('Katherine', 'Test', 'katherine321@gmail.com', 'password', 33, 'Female');
INSERT INTO users
  (first_name, last_name, email, password, age, gender)
VALUES
  ('Michael', 'Test', 'kira123@gmail.com', 'password', 36, 'Male');

--- VENUES table ---

INSERT INTO venues
  (name, address, city, province, country, latitude, longitude, display_picture, phone_number, email, postal_code)
VALUES
  ('Early Mercy', '540 King St W', 'Toronto', 'Ontario', 'Canada', 43.6451725, -79.3979345, 'https://clubbable.blob.core.windows.net/medias/Early-Mercy-?timestamp=636900604528499736', '4165070777', 'earlymercy@hotmail.com', 'M5V 1M3');

INSERT INTO venues
  (name, address, city, province, country, latitude, longitude, display_picture, phone_number, email, postal_code)
VALUES
  ('Belfast Love', '548 King St W', 'Toronto', 'Ontario', 'Canada', 43.6448958, -79.4006397, 'https://www.blogto.com/listings/restaurants/upload/2016/06/20160614-590-BelfastLove5.jpg', '4163632223', 'belfastlove@donnellygroup.ca', 'M5V 1M3');

--- VISITS table ---

INSERT INTO visits
  (user_id, venue_id)
VALUES
  (1, 1);
INSERT INTO visits
  (user_id, venue_id)
VALUES
  (1, 2);
INSERT INTO visits
  (user_id, venue_id)
VALUES
  (2, 1);
INSERT INTO visits
  (user_id, venue_id)
VALUES
  (3, 1);
INSERT INTO visits
  (user_id, venue_id)
VALUES
  (4, 1);
INSERT INTO visits
  (user_id, venue_id)
VALUES
  (5, 1);
INSERT INTO visits
  (user_id, venue_id)
VALUES
  (6, 1);
INSERT INTO visits
  (user_id, venue_id)
VALUES
  (8, 1);
INSERT INTO visits
  (user_id, venue_id)
VALUES
  (7, 1);
INSERT INTO visits
  (user_id, venue_id)
VALUES
  (9, 1);
INSERT INTO visits
  (user_id, venue_id)
VALUES
  (2, 2);
INSERT INTO visits
  (user_id, venue_id)
VALUES
  (3, 2);
INSERT INTO visits
  (user_id, venue_id)
VALUES
  (4, 2);
INSERT INTO visits
  (user_id, venue_id)
VALUES
  (5, 2);
INSERT INTO visits
  (user_id, venue_id)
VALUES
  (6, 2);
INSERT INTO visits
  (user_id, venue_id)
VALUES
  (7, 2);
INSERT INTO visits
  (user_id, venue_id)
VALUES
  (8, 2);

--- REVIEWS ---





