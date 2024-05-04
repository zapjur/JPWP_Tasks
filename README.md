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
6. Zakończ instalację i sprawdz czy serwer działa poprzez nacisniecie 'Win + R' i wpisanie services.msc. Jeśli istnieje usługa o nazwe postgresql-x64 oraz jest aktywna.
7. Pomiń instalacje stackbuildera, nie jest on nam potrzebny.

### Linux (Debian/Ubuntu)

1. Otwórz terminal i zaktualizuj listę pakietów:
   ```sudo apt update```
2. Zainstaluj PostgreSQL:
   ```sudo apt install postgresql postgresql-contrib```
3. Sprawdź, czy serwer bazy danych działa:
   ```sudo systemctl status postgresql```


### macOS

1. Najprostszą metodą instalacji jest użycie Homebrew. Jeśli nie masz Homebrew, zainstaluj go zgodnie z instrukcjami na [brew.sh](https://brew.sh/).
2. Zainstaluj PostgreSQL za pomocą Homebrew:
   ```brew install postgresql```
3. Po instalacji uruchom serwer bazy danych:
   ```brew services start postgresql```


## Konfiguracja bazy danych

1. Zaloguj się do PostgreSQL:
- Na Windows i macOS użyj polecenia
  ```psql -U postgres```.
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

# Instalacja Apache Maven

Apache Maven to narzędzie do zarządzania projektem i zrozumienia jego cyklu życia. Poniżej znajduje się instrukcja instalacji Mavena na systemach Windows, Linux i macOS.

## Instalacja Apache Maven

### Windows

1. Pobierz binarną wersję Apache Maven ze strony [Apache Maven Project](https://maven.apache.org/download.cgi).
2. Rozpakuj archiwum w lokalizacji, którą chcesz używać na stałe.
3. Dodaj lokalizację katalogu `bin` do zmiennej środowiskowej `PATH`:
   - Kliknij prawym przyciskiem myszy na ikonę `Ten PC` i wybierz `Właściwości`.
   - Kliknij `Zaawansowane ustawienia systemu`, następnie `Zmienne środowiskowe`.
   - W sekcji `Zmienne systemowe` znajdź i edytuj `PATH`, dodając ścieżkę do katalogu `bin` Mavena.

[Poradnik krop po kroku](https://phoenixnap.com/kb/install-maven-windows)

### Linux (Debian/Ubuntu)

1. Maven można zainstalować za pomocą menedżera pakietów: `sudo apt update`, `sudo apt install maven`
2. Po instalacji sprawdź wersję Mavena, aby upewnić się, że instalacja przebiegła pomyślnie: `mvn -version`
   

### macOS

1. Najprostszym sposobem na zainstalowanie Mavena jest użycie Homebrew. Jeśli nie masz Homebrew, zainstaluj go zgodnie z instrukcjami na [brew.sh](https://brew.sh/).
2. Zainstaluj Mavena za pomocą Homebrew: `brew install maven`
3. Po instalacji sprawdź wersję Mavena: `mvn -version`

# Instalacja npm (Node Package Manager)

Npm to menedżer pakietów dla języka programowania JavaScript, który jest domyślnym menedżerem pakietów dla platformy Node.js. Poniżej znajduje się instrukcja instalacji npm na systemach Windows, Linux i macOS.

## Instalacja npm

### Windows

1. Pobierz instalator Node.js (który zawiera npm) ze strony [oficjalnej Node.js](https://nodejs.org/).
2. Uruchom pobrany plik instalacyjny i postępuj zgodnie z instrukcjami na ekranie. Instalator automatycznie doda Node.js i npm do zmiennej środowiskowej `PATH`.
3. Po zakończeniu instalacji otwórz wiersz poleceń i wpisz `npm -v` oraz `node -v`, aby sprawdzić, czy npm i node zostały prawidłowo zainstalowane.

[Poradnik krok po kroku](https://phoenixnap.com/kb/install-node-js-npm-on-windows)

### Linux (Debian/Ubuntu)

1. Aby zainstalować Node.js i npm za pomocą menedżera pakietów, otwórz terminal i wykonaj następujące polecenia: `sudo apt update`, `sudo apt install nodejs npm`
2. Po zakończeniu instalacji, sprawdź wersję npm, aby potwierdzić, że instalacja przebiegła pomyślnie: `npm -v`


### macOS

1. Najprostszym sposobem na zainstalowanie Node.js i npm na macOS jest użycie Homebrew. Jeśli nie masz Homebrew, zainstaluj go zgodnie z instrukcjami na [brew.sh](https://brew.sh/).
2. Zainstaluj Node.js (zawierający npm) za pomocą Homebrew: `brew install node`
3. Po instalacji sprawdź wersję npm: `npm -v`

# Uruchomienie projektu

Aby uruchomić projekt, wykonaj następujące kroki:

1. Sklonuj repozytorium przy użyciu poniższej komendy: `git clone <URL_REPOZYTORIUM>` (Zastąp `<URL_REPOZYTORIUM>` rzeczywistym adresem URL repozytorium.)
2. Otwórz terminal i przejdź do folderu `frontend`. Zainstaluj zależności projektu za pomocą komendy: `npm install`
3. Następnie otwórz nowe okno terminala i przejdź do folderu `backend`. Zbuduj projekt przy użyciu Mavena: `mvn clean install`
4. Aby uruchomić frontend, w terminalu w folderze `frontend` wpisz komendę: `npm start` Spowoduje to uruchomienie strony na `localhost:3030`.
5. Aby uruchomić backend, w terminalu w folderze `backend` wpisz komendę: `mvn spring-boot:run`

Po wykonaniu powyższych kroków aplikacja powinna działać. Pamiętaj o następujących rzeczach:
- Aby zobaczyć efekt wprowadzonych zmian w frontendzie, wystarczy zapisać projekt. Zmiany zostaną automatycznie odświeżone.
- Aby zobaczyć efekt wprowadzonych zmian w backendzie, może być konieczne zrestartowanie serwera.


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

