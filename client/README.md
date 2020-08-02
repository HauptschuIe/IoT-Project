# React App

## Overview

<img src="hhttps://github.com/HauptschuIe/IoT-Project/blob/master/images/frontend.png" width="400" height="200">

#### Deployment

Create the Dockerfile.

    touch Dockerfile

Edit Dockerfile.

    nano Dockerfile
    
Insert following code.

    FROM nginx
    COPY . /usr/share/nginx/html

Create a build directory with a production build of the react app

    npm run build

Create a directory containing the Dockerfile and the production build.
Create Nginx docker Image and start an instance of the image.

    docker build -t nginx .
    docker run --name nginx -d -p 8080:80 nginx

