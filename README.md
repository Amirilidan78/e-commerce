# E-commerce 


### Project structure  
###### front-end- Nuxt js app running on port 3000 
###### back-end- Express js app running on port 8000 
###### webserver- Nginx, reverse proxying front-end and back-end app on port 80


### Quick start 
###### 1- Install docker (https://www.docker.com/products/docker-desktop) and docker compose (https://docs.docker.com/compose/install/)
###### 2- Run this command in root of project : docker-compose up -d --build 
###### 3- Wait for 2 minute and check http://localhost  


### Overview details 
###### - Nuxt js app serving on port 3000, nginx reverse proxy app and serving it to http://localhost 
###### - Express js app serving on port 8000, nginx reverse proxy app and serving it to http://api.localhost 
###### - You can access api via http://localhost/api/ in case you faced cors policy error  
