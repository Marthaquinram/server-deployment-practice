'use strict';
// TODO: 500.js
// Sends a 500 / Server Error message as the response
// Import this into your server and set it up to be “used” as the last route

function handle500(err, req, res, next) {
    const error = err.message ? err.message : err;

    const errorObject = {
        status: 500,
        message: 'ERROR, Sorry, Internal Server Error'
    }

    res.status(500).json(errorObject);
}

module.exports = handle500;

// got error codes from class repo/demo
