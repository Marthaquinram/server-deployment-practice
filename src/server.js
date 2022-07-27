'use strict';

const express = require('express');
require('./db');
const { logger } = require('../src/middleware/logger');
const { validator } = require('../src/middleware/validator');
const notFoundError = require('./error-handlers/404');
const serverError = require('./error-handlers/500');
const app = express();
app.use(express.json());
app.use(logger);
const Collection = require('../src/models/collection-class');
const { db, Bands, Soccer } = require('./db');





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
    if (req.query.name) {
        res.status(200).send({ name: req.query.name });
    } else {
        res.status(500).send('name is required');
    }
};

app.get('/', hello);
app.get('/data', data);
app.get('/person', validator, person);

new Collection(Bands, app, 'bands');
new Collection(Soccer, app, 'soccer');

function start(port) {
    app.listen(port, () => console.log(`Server listening on post ${port}`));
}

app.use('*', notFoundError);
app.use(serverError);
module.exports = {
    app,
    start
};
