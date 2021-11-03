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

22