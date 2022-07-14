'use strict';
//TODO: src/server.js which will serve as your server ‘module’ … will contain all of the module connections for the server
// Must export an object with a start() method(it should not start on it’s own) and a reference to the express app
// Create the / person route within your server.js
// This route should use the validator middleware to check the user’s input
// If valid, send a JSON object through the response with the name value in it
// i.e. { "name": "fred" }


const express = require('express');
const { logger } = require('../src/middleware/logger');
const { validator } = require('../src/middleware/validator');
const notFoundError = require('./error-handlers/404');
const serverError = require('./error-handlers/500');

//  /hello
const hello = (req, res) => {
    res.status(200).send('Hello, World');
};
//  /data
const data = (req, res) => {
    res.status(200).send({
        name: 'Martha',
        role: 'student'
    });
};
// Create the / person route within your server.js
const person = (req, res) => {
    res.status(200).send({ name: req.params.name });
};



const app = express();
app.use(logger);
app.use(validator);

app.get('/', hello);
app.get('/data', data);
app.get('/person/:name', person);
app.get('/notFoundError', notFoundError);
app.get('/serverError', serverError);

function start(port) {
    app.listen(port, () => console.log(`Server listening on post ${port}`));
}

module.exports = {
    app,
    start
};
