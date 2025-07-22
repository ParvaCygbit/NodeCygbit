// docker is basic tool for backend development
// why docker ??
//       in development everyone use different version of software so it is not possible to run same code on different machine
//       if i use nodejs 18 and you use nodejs 16 then it is not possible to run same code on different machine
//       so we need to use same version of software on different machine it also have problem in production
//       now we introduce docker is help to create container it contains code + dependencies + software => it is called unit of deployment or package
//       so we can run same code on different machine without any problem or conflicts
//       containers are lightweight and portable with the use of docker we  run 2 diffrent project on same machine
//       there is a docker image to create multiple containers
//       "em kau to docker image share karie to container create thay bija system ma"
//       "class ane object no je concept che same evo j dockeer image ane container ma che"
//       docker image is a static snapshot of the container what code, what dependencies, what software is used
//       docker hub is a public repository to share docker images like github
//       container is has its own enviment to run the code
//       docker image is a fie whiche containe instruction to create a container

//       virtual machine vs docker
//       there are 3 layer in system Hardware -> Host OS kernel -> Application Layer
//       host layer like windows, linux, mac etc. and application layer like nodejs, python, java, any game etc.
//       VM is create a new host OS kernel and run application layer on it and docker is create a new application layer on the same host OS kernel
//       VM is virtualize host OS kernel, application layer and docker is virtualize application layer only
//       VM is heavy and slow and docker is lightweight and fast
//       VM is support all OS and docker is support only linux kernel so that megority of images based on linux

//       so we can run that linux base images on windows and mac using docker desktop
//       docker desktop is added light weight hipervisor layer on top of windows and mac
//       it internally uses light weight linux distribution so that this all linux base images runs on this

//      now we download it and setup it then  we go to docker hub and use hello world image
//      copy code from docker hub and run it in terminal "docker pull hello-world" it is copy that image to local machine
//      now we run it "docker run hello-world" it is create a container and run then it gives output
/*      
                This message shows that your installation appears to be working correctly.
                To generate this message, Docker took the following steps:
                1. The Docker client contacted the Docker daemon.
                2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
                (arm64v8)
                3. The Docker daemon created a new container from that image which runs the
                executable that produces the output you are currently reading.
                4. The Docker daemon streamed that output to the Docker client, which sent it
                to your terminal.

                To try something more ambitious, you can run an Ubuntu container with:
                $ docker run -it ubuntu bash

                Share images, automate workflows, and more with a free Docker ID:
                https://hub.docker.com/

                For more examples and ideas, visit:
                https://docs.docker.com/get-started/
 */

//      now we run for ubuntu image "docker run -it ubuntu"  -> "-it" used for interactive terminal
//      now we can do anything in ubuntu container like "ls", "cd", "mkdir" etc.
//      now we exit from the container "exit" or "ctrl + d"
//      now we run "docker ps" to see the running container
//      to stop the container "docker stop cid" or "docker kill cid" or "docker stop container_name"
//      to remove the container "docker rm cid"
//      to remove the image "docker rmi image_name"
//      to see the all images "docker images"
//      to see the all containers "docker ps -a"
//      to see the all running containers "docker ps"
//      to see the all stopped containers "docker ps -f status=exited"
//      to knoe version of docker "docker -v"
//      to get help run "docker"
//      to delete or remove container "docker rm container_id"  then we remove the image "docker rmi image_id"
//      to pull the image for specific version "docker pull ubuntu:20.04" or "docker pull ubuntu:latest"  this is tag "20.04"
//      "docker run -d image_name"  this is run the container in detached mode like run in background

///     8.0: Pulling from library/mysql
///     fa07288abb8b: Already exists 
///     ec8f39a1086c: Already exists 
///     c6f7d8b9ec0f: Already exists 
///     04a0ce28ec2e: Already exists 
///     638509fc8b3b: Already exists 
///     f0c1fdca8b92: Pull complete 
///     b0bc4ae690f4: Pull complete 
///     a7c7ef039dde: Pull complete 
///     12c150de948b: Pull complete 
///     ba120b1d9fa4: Pull complete 
///     242af28a3a08: Pull complete 
///     Digest: sha256:968e12b1fde035655c7a940db808b47372b70128293a38a3914e0b291c306e5e
///     Status: Downloaded newer image for mysql:8.0
///     docker.io/library/mysql:8.0

//      this response is layers of image which is in sql 
//      now we define root password in container using env veriable which is also shown in documentation of mysql
//      "docker run -d -e MYSQL_ROOT_PASSWORD=secret mysql"
//      we also use custom name to run container "docker run -d -e MYSQL_ROOT_PASSWORD=secret --name mysql-older mysql:8.0"

//     layers in docker image -> it made of diffrent layers or it is collection of layers
//     base layer -> smol sixe linux base image like alpine, ubuntu, debian etc.
//     then we have diffrent layers and then we have Container layer which is final layer
//     all layers are read only we can't change this and container layer is read and write
//     "have kau to ek j image na alag version na container ma amuk layers same hoy che to ema already exist aave pull karie tyare"

//     port binding -> "continer ne potanu file system hoy che to em j ports pn agal hoy host machine thi"
//     now host machine has ports like 8080 , 5000, 3000 etc same as container has ports like 3306, 5432 etc.
//     "jo host port ek var bind karie to e bija container ma bind na thaye" so we need to use diffrent port
//     "have host no port 8080 ma request aave ane ene container na port 3306 ma forward karie ene j port binding kehevay" so using "-p"
//     "docker run -d -e MYSQL_ROOT_PASSWORD=secret --name mysql-latest -p8080:3306 mysql"