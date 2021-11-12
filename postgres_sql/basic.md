# create table 

CREATE TABLE name (
    name VARCHAR(50),
    area INTEGER
)

# insrt rows in table

INSERT INTO name_of_tablr (
    name, area
)
values
('Damascus', 50000),
('Kilis', 100000)

# Select data form table

SELECT * FROM name_of_table

<!-- to select specifc rows -->

SELECT name, area  FROM name_of_table

# Select rows with math 

SELECT name, area  / 10 FROM name_of_table

OR 

SELECT name, area + 10 FROM name_of_table

create name for new table from math operation 

SELECT name, area + 10 AS name_of_row FROM name_of_table


# string operators 

https://www.postgresql.org/docs/9.1/functions-string.html

OR 

https://www.w3schools.com/sql/sql_ref_sqlserver.asp


# excute order 


SELECT area          FROM name_of_table            WHERE area > 4000

Third                        First                    Second


# Filter data

SELECT area FROM name_of_table WHERE area > 4000

<!-- other comparison math operators -->

https://www.postgresql.org/docs/9.0/functions-comparison.html


SELECT area FROM name_of_table WHERE area = 5000

SELECT area FROM name_of_table WHERE area != 5000


SELECT area FROM name_of_table WHERE area BETWEEN 2000  AND 4000

<!-- check if value exist in table -->


SELECT area FROM name_of_table WHERE name IN ('kilis', 'Damascus')

Not in 

SELECT area FROM name_of_table WHERE name NOT IN ('kilis', 'Damascus')

# using and

SELECT area FROM name_of_table WHERE name NOT IN ('kilis', 'Damascus') AND  area = 2000



# doing math operation in where filter

SELECT name, population / area AS pop_den from cities 
WHERE  population / area > 6000;

# delete record 

DELETE FROM name_of_table WHERE name = 'Kilis'

# update record 

UPDATE table_name SET name = 'Istanbul' WHERE name = 'Kilis'




