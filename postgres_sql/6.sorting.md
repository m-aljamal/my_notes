# Sort

- from expencive to chipper

SELECT * 
FROM products
ORDER BY price DESC


OR from chipper to expencive 


SELECT * 
FROM products
ORDER BY price

OR

SELECT * 
FROM products
ORDER BY price ASC

- Sort by name alphabetical order

SELECT * 
FROM products
ORDER BY name


OR  


SELECT * 
FROM products
ORDER BY name DESC


- order by price if there are two recordes have same price order by weight

SELECT * 
FROM products
ORDER BY price, weight;

# offset & limit 

- offset => skip some number of recourds 

SELECT * 
FROM users 
OFFSET 4

skip the first 4 recourds and return the rest. 


- limit make sure that we only get some specific number of recourds 

SELECT *  FROM users LIMIT 2

SELECT * 
FROM products
ORDER BY price DESC 
LIMIT 4     => take the first 4 recourd
OFFSET 1     => remove the first recourd




 