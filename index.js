/*
Title: Monitoring App
Author: Bimasha Zaman
Email: developerbimasha@gmail.com
Date: 9/28/2022
*/

// Dependencies
const http = require("http");
const url = require("url");
const {StringDecoder} = require('string_decoder');

// App object- Module scaffolding
const app = {};

// configuration
app.config = {
  port: 3000,
};

//create server

app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(app.config.port, () => {
    console.log("Server is listening on 3000");
  });
};

//handle Request Response
app.handleReqRes = (req, res) => {
  //Req handle

  //Get the url and parse it
  const parseUrl = url.parse(req.url, true);
  // console.log(parseUrl)

  const path = parseUrl.pathname;
  // console.log(path);

  const trimmedPath = path.replace(/^\+|\/+$/g, "");
  // console.log(trimmedPath);

  const method = req.method.toLowerCase();
  const queryStringObject = parseUrl.query;
  const headersObject = req.headers;

  const decoder = new StringDecoder('utf-8');

  req.on('data' ,(buffer) => {

  })



  //Response Handle
  res.end("Hello World");
};

//start the server
app.createServer();

/*
Title: Monitoring App
Author: Bimasha Zaman
Email: developerbimasha@gmail.com
Date: 9/28/2022
*/
