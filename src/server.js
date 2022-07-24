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
const Collection = require('../src/models/collection-class');
const { bands } = require('./models/bands');
const { soccer } = require('./models/soccer');
const Bands = require('./models/bands');
const Soccer = require('./models/soccer');
// const Collection = require('./collection-class');
const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize(DATABASE_URL);
// const bands = Bands(sequelize, DataTypes);
// const soccer = Soccer(sequelize, DataTypes);
// const DATABASE_URL = process.env.DATABASE_URL



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
// app.post('/soccer', createPlayer);
// app.get('/soccer', allPlayers);
// app.get('/soccer/:id', getPlayer);
// app.put('/soccer/:id', updatePlayer);
// app.delete('/soccer/:id', deletePlayer);

// //CRUD bands
// app.post('/bands', createBand);
// app.get('/bands', allBands);
// app.get('/bands/:id', getBand);
// app.put('/bands/:id', updateBand);
// app.delete('/bands/:id', deleteBand);

new Collection(bands);
new Collection(soccer);
// const bands = Bands(sequelize, DataTypes);
// const soccer = Soccer(sequelize, DataTypes);

const bandsCollection = new Collection('bands', bands);
const soccerCollection = new Collection('soccer', soccer);

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
