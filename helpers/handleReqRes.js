/*
Title: Handle Req Response
Author: Bimasha Zaman
Email: developerbimasha@gmail.com
Date: 9/28/2022
*/

const { StringDecoder } = require("string_decoder");
const url = require("url");


const handler = {};

handler.handleReqRes = (req, res) => {
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


module.exports = handler



























/*
Title: Monitoring App
Author: Bimasha Zaman
Email: developerbimasha@gmail.com
Date: 9/28/2022
*/
