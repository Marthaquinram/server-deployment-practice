'use strict';

const express = require('express');
// const db = require('./db');
const { logger } = require('../src/middleware/logger');
const { validator } = require('../src/middleware/validator');
const notFoundError = require('./error-handlers/404');
const serverError = require('./error-handlers/500');
const { createBand, allBands, getBand, deleteBand, updateBand } = require('./routes/bands');
const { createPlayer, allPlayers, getPlayer, deletePlayer, updatePlayer } = require('./routes/soccer');
const app = express();
app.use(express.json());
app.use(logger);
// app.use(validator);


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

//CRUD soccer
app.post('/soccer', createPlayer);
app.get('/soccer', allPlayers);
app.get('/soccer/:id', getPlayer);
app.put('/soccer/:id', updatePlayer);
app.delete('/soccer/:id', deletePlayer);

//CRUD bands
app.post('/bands', createBand);
app.get('/bands', allBands);
app.get('/bands/:id', getBand);
app.put('/bands/:id', updateBand);
app.delete('/bands/:id', deleteBand);



function start(port) {
    app.listen(port, () => console.log(`Server listening on post ${port}`));
}

app.use('*', notFoundError);
app.use(serverError);
module.exports = {
    app,
    start
};


// ? is query
// /: is params
