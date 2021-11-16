# Subquery

![alt text](subquery.png "subquery")

when we need to write two query we should compin them down into one by subquery

SELECT name, price 
FROM products
WHERE price > (
SELECT MAX(price)
FROM products
WHERE department = 'Toys'  
);

