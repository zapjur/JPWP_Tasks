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

# Zadanie 3
### Dodawanie tasków
- Dodać endpoint PostMapping w backend w controllers/TaskController.java
- Wysłać zapytanie na ten endpoint z frontend za pomocą axios z axios_helper.js. (uzupełnić funkcje handleAddTask w App.js)

Jako odpowiedź do zadania wstawić screenshot ze strony z dodanym taskiem, powinien on wyglądać np. tak:
![image](https://github.com/zapjur/JPWP_Tasks/assets/62191962/a07e6982-d6eb-4519-8426-a03ce080108d)

# Zadanie 4
### Zmiana statusu taska
- Dodać endpoint PostMapping w backend w controllers/TaskController.java
- Wysłać zapytanie na ten endpoint z frontend za pomocą axios z axios_helper.js. (uzupełnić funkcje handleChangeTaskStatus w App.js)
  
Jako odpowiedź do zadania wstawić screenshot ze strony z taskiem ze statusem "zrobione" (inny niż skosić trawę), powinien on wyglądać np. tak:
![image](https://github.com/zapjur/JPWP_Tasks/assets/62191962/306111ea-0377-4aab-a8fc-14c19282d73b)

# Zadanie 5
### Usuwanie taska
- Dodać endpoint DeleteMapping w backend w controllers/TaskController.java
- Wysłać zapytanie na ten endpoint z frontend za pomocą axios z axios_helper.js. (uzupełnić funkcje handleDeleteTask w App.js)

Jako odpowiedź do zadania wstawić screenshot ze strony z dwoma taskami, powinien on wyglądać np. tak:  
![image](https://github.com/zapjur/JPWP_Tasks/assets/62191962/4c11e6ca-4aa8-46e8-9ca2-c2d44b51f8fb)

# Zadanie 6
### Edycja taska
- Dodać endpoint PutMapping w backend w controllers/TaskController.java
- Wysłać zapytanie na ten endpoint z frontend za pomocą axios z axios_helper.js. (uzupełnić funkcje handleEditTask w App.js)

Jako odpowiedź do zadania wstawić screenshot ze strony z zedytowanym taskiem "Skosić trawę", powinien on wyglądać np. tak:
![image](https://github.com/zapjur/JPWP_Tasks/assets/62191962/5174e078-f4a0-42d8-8413-65fcfb941a6b)

