# JPWP_Tasks

# Przygotowanie środowiska

Instalacja postgresql: https://www.postgresql.org/download/

MacOS:  brew services start postgresql   
       
psql postgres  
CREATE DATABASE backenddb;
CREATE USER backend WITH ENCRYPTED PASSWORD 'backend';
GRANT ALL PRIVILEGES ON DATABASE backenddb TO backend;

# Zadanie 1
### Pobieranie tasków z bazy danych
- Dodać endpoint GetMapping w backend w controllers/TaskController.java
- Wysłać zapytanie na ten endpoint z frontend za pomocą axios z axios_helper.js. Użyj do tego useEffect, żeby wysłać zapytanie odrazu po załadowaniu komponentu.

Jako odpowiedź do zadania wstawić screenshot z network, powinien on wyglądać tak:
![image](https://github.com/zapjur/JPWP_Tasks/assets/62191962/34be935a-d78a-4bcc-aef9-57f813c50258)

# Zadanie 2
### Wyświetlanie tasków 
- Użyć do tego TaskPanel.js z folderu components
- Do Button dodać ikony z MaterialUI: https://mui.com/material-ui/material-icons/

Jako odpowiedź do zadania wstawić screenshot ze strony, powinien on wyglądać tak:
![image](https://github.com/zapjur/JPWP_Tasks/assets/62191962/2ef62883-2263-4c08-8db2-3f11dded118e)
