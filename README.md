# JPWP_Tasks

# Przygotowanie środowiska

Instalacja postgresql: https://www.postgresql.org/download/

MacOS:  brew services start postgresql   
       
psql postgres  
CREATE DATABASE backenddb;
CREATE USER backend WITH ENCRYPTED PASSWORD 'backend';
GRANT ALL PRIVILEGES ON DATABASE backenddb TO backend;

# Zadanie 1
