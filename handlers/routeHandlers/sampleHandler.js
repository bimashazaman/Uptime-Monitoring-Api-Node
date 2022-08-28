
/*
Title: Sample handler
Author: Bimasha Zaman
Email: developerbimasha@gmail.com
Date: 9/28/2022
*/


const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
    console.log(requestProperties);

    callback(200, {
        message: 'This is a sample url',
    });
};

module.exports = handler;












/*
Title: Sample handler
Author: Bimasha Zaman
Email: developerbimasha@gmail.com
Date: 9/28/2022
*/