# PostgreSQL

Stores information on humidty.


## Getting Started

Pull the newest image from Docker Hub

    docker pull postgres 
    
Make an empty directory for storing data outside of the container.
    
    mkdir -p $HOME/docker/volumes/postgres 


Start the Postgres Container

    docker run --rm   --name pg-docker -e POSTGRES_PASSWORD=<Your_Password> -d -p 5432:5432 -v $HOME/docker/volumes/postgres:/var/lib/postgresql/data  postgres 

-p: Bind port 5432 on localhost to port 5432 within the container. After setting up firewall rules the container is accessible from outside at http://<your_ip>:5432.

-v: Mount $HOME/docker/volumes/postgres on the host machine to the container side volume path /var/lib/postgresql/data created inside the container. This ensures that postgres data persists even after the container is removed.

## Inserting Data

#### 1. Create a Database

        docker exec -it <container_id> bash
        psql -U postgres
        
Create Database SQL statement.  

        CREATE DATABASE <database_name>;
        
Connect to your database 

        \c <database_name>
        
#### 2. Create a Table

For creating the table run following SQL Statement:

    CREATE TABLE <table_name>(
      column1_name SERIAL PRIMARY KEY,
      column2_name integer
    );
 
#### 3. Inserting data (CLI)

    INSERT INTO table_name(column1, column2, …)
    VALUES (value1, value2, …);

## Sources:


Prepared Statemets: https://mkyong.com/jdbc/jdbc-preparestatement-example-insert-a-record/ 

PostgreSQL Docker Container: https://hackernoon.com/dont-install-postgres-docker-pull-postgres-bee20e200198

PostgreSQL Docker Container: https://hub.docker.com/_/postgres

Serial Primary Key: https://www.postgresqltutorial.com/postgresql-serial/

Inserting Data: https://www.postgresqltutorial.com/postgresql-insert/
