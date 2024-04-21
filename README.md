# JPWP_Tasks

# Zadanie 1

Instalacja postgresql: https://www.postgresql.org/download/

MacOS:  brew services start postgresql   
       
psql postgres  
CREATE DATABASE backenddb;
CREATE USER backend WITH ENCRYPTED PASSWORD 'backend';
GRANT ALL PRIVILEGES ON DATABASE backenddb TO backend;
