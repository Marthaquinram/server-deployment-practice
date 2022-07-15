'use strict';
//TODO: Create a middleware folder and add 2 middleware modules to it:
// logger.js
// Performs a console.log with the request method and path
// Import this into your server and set it up to run at the application level for all routes
const logger = (req, res, next) => {
    console.log(req.method, req.path);
    next();
};

module.exports = {
    logger,
};
