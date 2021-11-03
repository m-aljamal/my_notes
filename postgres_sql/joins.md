# Joins

prduces values by merging together rows from different tables

used when find data from multiple resources

# Aggregation

calculates a value from multiple rows like finding most, average, least.



# joins examples

CREATE TABLE comments(
id SERIAL PRIMARY KEY,
contents VARCHAR(200),
user_id INTEGER REFERENCES users(id),
photo_id INTEGER REFERENCES photos(id)
)

INSERT INTO comments(contents, user_id, photo_id)
VALUES
('fft djg test ftgh', 3, 1),
('fft djg test ftgh', 1, 2),
('fft djg test ftgh', 1, 3),
('fft djg test ftgh', 1, 3),
('fft djg test ftgh', 2, 1),
('fft djg test ftgh', 4, 4),


SELECT contents, username
FROM COMMENTS
JOIN users ON users.id = comments.user_id

SELECT contents, url
FROM comments
JOIN photos ON photos.id = comments.photo_id

