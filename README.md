# JPWP_Tasks

# Przygotowanie środowiska

# Instalacja i konfiguracja PostgreSQL dla Spring Boot

Ten tutorial pokaże, jak zainstalować i skonfigurować PostgreSQL na systemach Windows, Linux oraz macOS i jak przygotować środowisko do pracy z aplikacją Spring Boot.

## Instalacja PostgreSQL

### Windows

1. Pobierz instalator PostgreSQL z [oficjalnej strony](https://www.postgresql.org/download/windows/).
2. Uruchom pobrany plik i postępuj zgodnie z instrukcjami instalatora.
3. Wybierz komponenty do instalacji. Zazwyczaj wystarczy serwer bazy danych i narzędzia komend.
4. Zaznacz odpowiednią lokalizację instalacji.
5. Wybierz port (domyślnie 5432) i hasło dla superużytkownika `postgres`.
6. Zakończ instalację i upewnij się, że serwer bazy danych jest uruchomiony.

### Linux (Debian/Ubuntu)

1. Otwórz terminal i zaktualizuj listę pakietów: ```sudo apt update```
2. Zainstaluj PostgreSQL: ```sudo apt install postgresql postgresql-contrib```
3. Sprawdź, czy serwer bazy danych działa: ```sudo systemctl status postgresql```


### macOS

1. Najprostszą metodą instalacji jest użycie Homebrew. Jeśli nie masz Homebrew, zainstaluj go zgodnie z instrukcjami na [brew.sh](https://brew.sh/).
2. Zainstaluj PostgreSQL za pomocą Homebrew: ```brew install postgresql```
3. Po instalacji uruchom serwer bazy danych: ```brew services start postgresql```


## Konfiguracja bazy danych

1. Zaloguj się do PostgreSQL:
- Na Windows i macOS użyj polecenia ```psql -U postgres```.
- Na Linux: 
  ```
  sudo -u postgres psql
  ```
2. Utwórz nową bazę danych i użytkownika:
   ```
   CREATE DATABASE backenddb;
   ```
   ```
   CREATE USER backend WITH ENCRYPTED PASSWORD 'backend';
   ```
   ```
   GRANT ALL PRIVILEGES ON DATABASE backenddb TO backend;
   ```
   
4. Wyjdź z psql: `\q`


# Zadanie 1
### Pobieranie tasków z bazy danych
- Dodać endpoint GetMapping w backend w controllers/TaskController.java
- Wysłać zapytanie na ten endpoint z frontend za pomocą axios z axios_helper.js. Użyj do tego useEffect, żeby wysłać zapytanie odrazu po załadowaniu komponentu.

Jako odpowiedź do zadania wstawić screenshot z network, powinien on wyglądać tak:
![image](https://github.com/zapjur/JPWP_Tasks/assets/62191962/34be935a-d78a-4bcc-aef9-57f813c50258)

# Zadanie 2
### Wyświetlanie tasków 
- Użyć do tego TaskPanel.js z folderu components (TaskPanel będzie wymagał podania mu 3 funkcji, które będą do uzupełnienia później. Na tym etapie należy przekazać te funkcje zgodnie z ich nazwami)
- Do Button dodać ikony z MaterialUI: https://mui.com/material-ui/material-icons/
- Za pomocą sx zmodyfikować komponenty z materialUI, tak aby wyglądały jak na screenie poniżej

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

