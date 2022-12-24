# DBMS final project template

### 1. Install node, npm and VSCode

- node, npm: https://nodejs.org/en/download/
- VSCode: https://code.visualstudio.com/
- Check if both node and npm are installed correctly
![](https://i.imgur.com/9CBIYMN.png)

### 2. Run the project
- create .env file and set these parameters
  ![](https://i.imgur.com/GbEepXv.png)
- here's the information of test1 database
![](https://i.imgur.com/MXXdma2.png)
- `npm install`
- `npm start`
- Now you can open the browser and enter http://localhost:3000 to check if the service is up

### 3. key files you need to care about

- MVC => Model, View, Controller
- M: model/db.config.js => it's responsible for connecting to the database
- V: views/index.js => webpage
- C: routes/users.js => it looks after the creation of REST API
- **hint: for client side, if you wanna send request to server side, you can use jquery, axios or fetch.**

### 4. swagger

- reference: https://israynotarray.com/nodejs/20201229/1974873838/
