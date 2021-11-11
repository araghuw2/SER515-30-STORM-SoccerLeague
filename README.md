# Soccer Tournament Website

- • A full fletched soccer tournament website written in react.js with spring boot in backend to fetch data.

### Tech-stack used

- Spring boot- a back end web application framework.
- React – Fornt End framework.
- axios - Promise based HTTP client for the browser and node.js.
- joi - powerful schema description language and data validator for JavaScript.
- Redux – To test client, server and native environment.

### The complete website module can be divided into two main steps:

- Front End part where you will be seeing the face of website that allows the stakeholders to manage a soccer tournament like adding teams, scheduling matches.
- Backend part developed in spring boot to build connection between website and database.

### HOW TO INITIATE

#### Creating MySQL DB

- Go to MySQL command line
- Create Database using
```
Create Database soccer_db
```
- Download the sql script from https://drive.google.com/file/d/1tLFwSUdw5D3Zrxt6bcM1hBIdjGjCkcjM/view?usp=sharing
- Copy the mysql commands from the file and run them on MySQL Command line tool
- (Or) Run the following command to run the sql script
```
mysql -h hostname -u user database < path/to/create_tables.sql
```
#### Running the backend server
- In the application.properties file found in \soccer-tournament\SoccerTournamentBackend\src\main\resources\application.properties 
  - Change the datasource username and password according to the local setup
- Run the following command from \soccer-tournament\SoccerTournamentBackend folder in command line
```
mvn spring-boot:run
```
#### Running the frontend
- Run the following commands from soccer-tournament\SoccerTournamentFrontEnd
```
npm install
```
```
npm start
```


## Authors

**Tapaswi Reddy Busireddy - 1222611351**<br/>
**Vikram Kumar Nolastname - 1222503477**<br/>
**Namrata Gaur - 1222598689**<br/>
**Prachi Gupta - 1220618126**<br/>
**Aru Raghuwanshi - 1219789207**<br/>
**Vidhya Sathyalaya Ramakrishnan - 1221391730**<br/>
