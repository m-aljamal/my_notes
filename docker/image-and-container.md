# image and container

-image: include everything that app needs to run such as libraries, app files

once we have the image we can start a container from it 

- container is life vertual machine it provide enviromnet to excute the app 

can be stopped and restarted  is just a process

can run multi container form same image 

# dockerfile instructions:

FROM    

WORKDIR

COPY

ADD

RUN 

ENV

EXPOSE

USER

CMD

ENTRYPOINT

# choosing the right base image

in the root app add Dockerfile:
 
FROM   => for base image can be operating system like windows or linux
             or operating system  + run time enviroment 
             for example for python you want to start from python image
            javascript   start from node image

search for this on docker and copy it from there

after that in termnal:

docker build -t react-app .    => react-app is the name of the app

docker image ls

find the image name and:

start container:

docker run -it react-app sh

can see the node --version 



# Copy app files into image

FROM node:14.16.0-alpine3.13
COPY  . /app/    => can copy one file or multiple   . /app/  means copy app files into app directory 
                    package*.json /app/


OR 

FROM node:14.16.0-alpine3.13
WORKDIR /app   => directory
COPY  . .     => copy everything into /app

OR

ADD . .     some defernet  if add file.zip   will automaticly unzip



after that run:

docker build -t react-app sh

# Excluding files and directories

no need to copy node_modules

create file in root caled  .dockerignore

node_modules/



# running commands 


FROM node:14.16.0-alpine3.13
WORKDIR /app   => directory
COPY  . . 
RUN npm install   => this to run in termnal   


# setting enviroment variables:

FROM node:14.16.0-alpine3.13
WORKDIR /app    
COPY  . . 
RUN npm install  
ENV API_URL=http://api.myapp.com/  


docker build -t react-app sh

printenv   => to see the env file   

Or

printenv API_URL

OR 

echo $API_URL

# Exposing Ports

in normal app we run the app in localhost:3000

but no it is run from container 

FROM node:14.16.0-alpine3.13
WORKDIR /app    
COPY  . . 
RUN npm install  
ENV API_URL=http://api.myapp.com/  
EXPOSE 3000  => this container run on port 3000


# setting the user:

by default docker run on root user

we should create user with limited privilege

docker run -it alpine 

adduser 

create a system user 

first we need to add group 

addgroup app

adduser -S -G app   => create system user with primary group app  is name of user

groups app   => show the group users

- another short way 

addgroup app && adduser -S -G app app

in the docker file:

FROM node:14.16.0-alpine3.13
WORKDIR /app    
COPY  . . 
RUN npm install  
ENV API_URL=http://api.myapp.com/  
EXPOSE 3000  
RUN addgroup app && adduser -S -G app app
USER app        // set the user to app

docker build -t react-app .

docker run -it react-app sh


# Defining entrypoints:

here we don't need to run in intreactive mood 

docker run -it react-app sh    no
 
docker run react-app           yes

move the adding user to the top of the file 

FROM node:14.16.0-alpine3.13
RUN addgroup app && adduser -S -G app app
USER app   
WORKDIR /app    
COPY  . . 
RUN npm install  
ENV API_URL=http://api.myapp.com/  
EXPOSE 3000  


docker build -t react-app .

docker run react-app npm start

in order to not add npm start in every run:

FROM node:14.16.0-alpine3.13
RUN addgroup app && adduser -S -G app app
USER app   
WORKDIR /app    
COPY  . . 
RUN npm install  
ENV API_URL=http://api.myapp.com/  
EXPOSE 3000  
CMD npm start  => default command to be executed

docker run react-app

CMD is a run time RUN in build command 

use exc:

FROM node:14.16.0-alpine3.13
RUN addgroup app && adduser -S -G app app
USER app   
WORKDIR /app    
COPY  . . 
RUN npm install  
ENV API_URL=http://api.myapp.com/  
EXPOSE 3000  
CMD ["npm", "start"]   =>  this can be override by =>   docker run react-app sh 
                            but useing ENTRYPOINT ["npm", "start"]  will not easly
                            need to add docker run react-app --entrypoint



# speeding up builds:

FROM node:14.16.0-alpine3.13
RUN addgroup app && adduser -S -G app app
USER app   
WORKDIR /app  
COPY package*.json .
RUN npm install  
COPY  . . 
ENV API_URL=http://api.myapp.com/  
EXPOSE 3000  
CMD ["npm", "start"] 


the instructions that not changed frequntly should be at top and changing instructions at the bottom


# Removeing images:

docker images 

dangling images is images that have no connection so to remove them:

docker image prune 

see the stops container:

docker ps -a 

to remove them:

docker container prune


docker image  => will list the commants that can be used 

docker image rm hello-docker 


# tagging images: 


docker images   

REPOSITORY    TAG       IMAGE ID       CREATED       SIZE
postgres      latest    317a302c7480   8 days ago    374MB
ubuntu        latest    ba6acccedd29   2 weeks ago   72.8MB
hello-world   latest    feb5d9fea6a5   5 weeks ago   13.3kB



the TAG here is just label  in production don't use latest 

to tage image: 

docker build -t react-app:3.1.5 .     // 3.1.5 is the tag


docker image tag 317 postgres:latest

# sharing images: 

create repository on docker website 


docker image tag 317a mohammad/react-app:2      // 2 is the name of tag anything 

to push the image

docker push mohammad/react-app:2 