/*
Title: Monitoring App
Author: Bimasha Zaman
Email: developerbimasha@gmail.com
Date: 9/28/2022
*/

// Dependencies
const http = require("http");

// App object- Module scaffolding
const app = {};

// configuration
app.config = {
    port: 3000
};

//create server

app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(app.config.port, () => {
    console.log('Server is listening on 3000');
  })
};

//handle Request Response
app.handleReqRes = (req, res) => {
  //Response Handle
  res.end('Hello World');
};

//start the server
app.createServer();
