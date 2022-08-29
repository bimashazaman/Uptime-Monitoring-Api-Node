/*
Author: Bimasha Zaman
Email: developerbimasha@gmail.com
Date: 9/28/2022
*/

// dependencies
const server = require('./lib/server');
const workers = require('./lib/worker');

// app object - module scaffolding
const app = {};

app.init = () => {
    // start the server
    server.init();
    // start the workers
    workers.init();
};

app.init();

// export the app
module.exports = app;
