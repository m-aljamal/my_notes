# one-to-many

A user has many photos => has means one to many

# many-to-one

single or many images belong to one user

A photo has one user

A photo has many comments => a comment has one photo

# one-to-one

company has one CEO => company <-> CEO CEO has one company

student <-> desk

capital <-> country

# many-to-many

students <-> classes

players <-> football matches

movies <-> actors

# in table

the many side of the relationship gets the foriegn key column

![alt text](manytoone.png "manytoone")

# create table with id and create relation

CREATE TABLE users (
id SERIAL PRIMARY KEY,
username VARCHAR(50)
)

INSERT INTO users (username)
VALUES
('Mohammad'),
('Ahmed'),
('Mostafa'),
('Yaman')

CREATE TABLE photos(
id SERIAL PRIMARY KEY,
url VARCHAR(200),
user_id INTEGER REFERENCES users(id)  
)

INSERT INTO photos (url, user_id)
VALUES
('http://1.jpg', 4),
('http://2.jpg', 4)


SELECT * FROM photos WHERE user_id = 4

SELECT  * FROM photos
JOIN users ON users.id = photos.user_id