/*
Author: Bimasha Zaman
Email: developerbimasha@gmail.com
Date: 9/28/2022
*/
// module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    callback(404, {
        message: 'Your requested URL was not found!',
    });
};

module.exports = handler;
