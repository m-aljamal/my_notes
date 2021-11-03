# install image on computer

search for the image from https://hub.docker.com/ for example ubuntu

<!-- command -->

docker run ubuntu

<!-- command -->

docker ps => see the running containers
docker ps -a => see the running containers and the stops as will

docker run -it => start container in intreactive mood

docker run -it ubuntu

# some linux commands

apt => in linux shorcat for advanced package tool

apt update => always run before install pagkage

apt install package_name to install a package

apt remove package_name to remove image

whoami => print the courrent user

<!-- navigation the file system -->

pwd => print working directory

ls => see the files

ls -1 => list one item each line

ls -l => list with details

ls /bin => list what is in bin folder

cd => move between files

cd ~ go to home file

mv => rename the file

mv old_folder_name new_folder_name

cat file_name to print the file content

more file_name to print file

less fite_name to print file

cat file1.txt > file2.txt => copy the content of the file 1 into the file 2

cat file1.txt file2.txt > file3.txt

echo hello > hello-file.txt => write hello and create file hello-file.txt

ls -l /etc > file.txt   => write the etc file content into file.txt


<!-- search for text  -->
grep hello file1.txt  

grep -i hello file1.txt  

grep -i root /etc/passwd 

<!-- search in mutliple files -->


grep -i hello file1.txt file2.txt  

grep i hello file*  => all file with name start with file

grep -ir hello .  => search in all file recrosivly 


<!-- finding files and directories -->

find =>  find all files 

ls -a => see the hidden files 

find -type d    =>  only directory 

find -type f -name "f*"    find all files with name f 

find / -type f -name "*.py" > python-files.txt  => search in files all files that end with .py and add the result in python-files.txt 

multiple command 

mkdir test ; cd test ; echo done

mkdir test && cd test && echo done    if command fail the rest will not complete 

mkdir test ||  echo done   or command

ls /bin | less  show the bin folder using less to go up and down 


mkdir hello; \        to type in multiple lines

cd hello; \ 

# envirment variable

printenv    => see al the env 

printenv PATH

to define new variable:

export DB_USER = mosh    =>  only avalible during the session 


echo DB_USER=mosh >> .bashrc       => create variable in this file always be there

# Managing Processes

ps  => see al running processes 

sleep 3   => the propt will stop for 3 sec

sleep 3 &  => sleep in the background 

to stop the proccess:

 PID TTY          TIME CMD
 120968 pts/1    00:00:00 bash
 275385 pts/1    00:00:00 ps


kill proccess_id  120968


# Managing Users:

create new user and login:

useradd   => add user

usermod   => edit user

userdel   => delete user

if type useradd will see the list of options 

useradd  -m ahmed   

cat /etc/passwd

usermod  -s /bin/bash john    => change the user command program 

cat /etc/passwd 

cat /etc/shadow   => here is the passwords stored 


login: 

- docker exec -it -u john container_id bash    =>  login with user john 

adduser  =>  more intractive  can set password and group 

adduser bob    

# Managing Groups:

groupadd developers

usermod -G developers john 

cat /etc/passwd | grep john 

groups john

# file permissions:

ls -l  

drwxr-xr-x 2 mohamad mohamad 4096 Eki 19 19:09  Desktop
drwxr-xr-x 2 mohamad mohamad 4096 Eki  5 22:43  Documents
drwxr-xr-x 6 mohamad mohamad 4096 Kas  3 18:27  Downloads
drwxr-xr-x 2 mohamad mohamad 4096 Eki  5 22:43  Music
drwxr-xr-x 3 mohamad mohamad 4096 Kas  2 07:26  Pictures



drwxr-xr-x   => if the first letter is d means it is a directory 
                if it is - means it is a file 

wxr-xr-x     => wxr  means read, write, excute  
   

   wxr   -    xr    -    x

   woner       groub    anyone else 


change mode: 

chmod u   => for user  
chmod g    => groub
chmod o   => others 

chmod u+x    => user to excute 

chmod u+x file_name

chmod   og+x+w-r   => other and groub add excute add write  remove read 
 