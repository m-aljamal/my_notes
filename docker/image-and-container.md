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


33










