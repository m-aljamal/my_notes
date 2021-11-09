# remove all container 

docker container rm -f $(docker container ls -aq)   => stops and running  will be removed


# remove all images 

docker image rm -f $(docker image ls -q)


# fullstack porject

project folders:

frondend

backend

docker-compose.yml


-  docker-compose up 


# compose file:

name should be  docker-compose.yml

version: "3.8"    => this is the version of the docker-compose

services:       
   frontend:       
   backend:
   database:
             services => what services the app is useing
            frontend, backend, database => these names are arbitrary could be any names, the idea of them is to tell docker-compose how to build images for each service and how to run images  - means array

- for each service: 

 frontend:
    build:  where to find the docker file for this service 
            this docker file same as before 

FROM node:14.16.0-alpine3.13
RUN addgroup app && adduser -S -G app app
USER app   
WORKDIR /app  
COPY package*.json .
RUN npm install  
COPY  . . 
ENV API_URL=http://api.myapp.com/  
EXPOSE 3001  
CMD ["npm", "start"] 


frontend:
    build: ./frontend
    ports: 
    - 3000:3000    
    environment:
       DB_URL: mongodb://db/vidly         


for databse we can not build an image just use image from docker hup 

database: 
   image: mongo:4.0-xenial
   ports:
     - 27017:27017 
   volumes: 
     - name_of_valume:/data/db   
    
 full file: 

 version: "3.8"
 services:       
   frontend:
       build: ./frontend
       ports: 
          - 3000:3000    
        environment:
           DB_URL: mongodb://db/vidly         
   backend:
      build: ./backend
      ports: 
          - 3001:3001
      environment:
          DB_URL: mongodb://db/vidly   
   database:
       image: mongo:4.0-xenial
       ports:
         - 27017:27017 
       volumes: 
         - name_of_valume:/data/db
volumes:
   name_of_valume:  



to build the app:

docker-compose build 

docker images  => will list the app images
 
docker-compose build --no-cache   => will build without cache


docker-compose up -d   => start in background 



- docker-compose down  => stop the container



to read the app changes without rebulding the images:


  volumes:   
         - ./backend:/app   


version: "3.8"
 services:       
   frontend:
       build: ./frontend
       ports: 
          - 3000:3000    
        environment:
           DB_URL: mongodb://db/vidly         
   backend:
      build: ./backend
      ports: 
          - 3001:3001
      environment:
          DB_URL: mongodb://db/vidly 
      volumes:   
         - ./backend:/app    
   database:
       image: mongo:4.0-xe nial
       ports:
         - 27017:27017 
       volumes: 
         - name_of_valume:/data/db
volumes:
   name_of_valume: 




