# container:

docker images   => see  images

docker ps  => see the running container 


docker run react-app  => for running new container


docker run -d react-app  => run the container in the background 
                             so we can use the termnal detached mood

docker run -d --name any_name_you_want  react-app  => 
                                            give the container a name


docker logs 655   => see the logs of running container 655 is the id

docker logs -f 655    => see the logs contunsly


docker logs -n 5 655 => see the last five line of logs


# publishing ports 

if you run a countainer on localhost:3000

you don't have access in your mashine 

sudo docker ps

CONTAINER ID   IMAGE      COMMAND                  CREATED      STATUS        PORTS                                       NAMES
7b8c9c5f0e09   postgres   "docker-entrypoint.s…"   2 days ago   Up 25 minutes   0.0.0.0:5432->5432/tcp, :::5432->5432/tcp   nest_bootcamp_nodeapi_db_1


we have          PORTS
        0.0.0.0:5432->5432/tcp


docker run -d -p 80:3000 --name c1 react-app     or 3000:3000   => if you go to localhost:80 
can see the react app 


# excuting commands in running containers

sudo docker exec 7b8 ls     => will print file list in the container 7b8 is the container id

sudo docker exec -it 7b8 sh  =>  start shell in container


# stoping starting container 

docker stop name_of_container

docker start name_of_container   =>  docker run will start new container this will
                                     start the stop container
 

# remove container

docker rm name_of_container

Or

docker rm -f name_of_container  


# data useing volumes:

volume is a storage outside the container can be in host or cloud

docker volume 

docker volume create name_of_valume   => create a volume 

docker volume inspect name_of_valume   => will print some info about the created volume

docker run -d -p 4000:300 -v name_of_valume:/app/data image_name




 