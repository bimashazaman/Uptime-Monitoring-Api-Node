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
app.config = {};

//create server

app.createServer = () => {
  const server = http.createServer();
};

//handle Request Response
app.handleReqRes = (req, res) => {
  //Response Handle
  res.end('Hello World');
};
