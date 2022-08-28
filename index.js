/*
Title: Monitoring App
Author: Bimasha Zaman
Email: developerbimasha@gmail.com
Date: 9/28/2022
*/




// Dependencies
const http = require("http");
const {handleReqRes} = require('./helpers/handleReqRes')

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
app.handleReqRes = handleReqRes;

//start the server
app.createServer();

/*
Title: Monitoring App
Author: Bimasha Zaman
Email: developerbimasha@gmail.com
Date: 9/28/2022
*/
