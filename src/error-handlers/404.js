'use strict'

// TODO: Create a error - handlers folder and add 2 modules to it:
// 404.js
// Sends a 404 / Not - Found message as the response
// Import this into your server and set it up to be “used” after your other routes


function handle404(req, res, next) {

    const errorObject = {
        status: 404,
        message: 'ERROR, Sorry, we could not find what you were looking for'
    }

    res.status(404).json(errorObject);
}

module.exports = handle404;

// got error codes from class repo/demo
