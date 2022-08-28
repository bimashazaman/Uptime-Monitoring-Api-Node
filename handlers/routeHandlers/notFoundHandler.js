
/*
Title: Not Found handler
Author: Bimasha Zaman
Email: developerbimasha@gmail.com
Date: 9/28/2022
*/

const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    callback(404, {
        message: 'Your requested URL was not found!',
    });
};

module.exports = handler;













/*
Title: Not Found handler
Author: Bimasha Zaman
Email: developerbimasha@gmail.com
Date: 9/28/2022
*/