/*
Title: Monitoring App
Author: Bimasha Zaman
Email: developerbimasha@gmail.com
Date: 9/28/2022
*/

// Dependencies
const http = require("http");
const url = require("url");
const { StringDecoder } = require("string_decoder");

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
  const path = parseUrl.pathname;
  const trimmedPath = path.replace(/^\+|\/+$/g, "");
  const method = req.method.toLowerCase();
  const queryStringObject = parseUrl.query;
  const headersObject = req.headers;

  const decoder = new StringDecoder("utf-8");
  let realData = "";

  req.on("data", (buffer) => {
    realData += decoder.write(buffer);
  });

  req.on("end", () => {
    realData += decoder.end();

    //Response Handle
    res.end("Hello World");
  });
};

//start the server
app.createServer();

/*
Title: Monitoring App
Author: Bimasha Zaman
Email: developerbimasha@gmail.com
Date: 9/28/2022
*/
