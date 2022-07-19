
// const { response } = require('express');

const { Bands } = require('../db');

//Creating a band
const createBand = async (req, res) => {
    const { musicBands, genre } = req.body;
    const band = Bands.build({ musicBands, genre });
    await band.save();
    res.status(200).send(band);
};

//List ALL bands
const allBands = async (req, res) => {
    const bands = await Bands.findAll();
    res.status(200).send(bands);
};


//locating the band by their id (singular band)
const getBand = async (req, res) => {
    const singleBand = await Bands.findAll({
        where: {
            id: req.params.id,
        },
    });
    if (singleBand.length > 0) {
        res.status(200).send(singleBand[0]);
    } else {
        res.status(404).send(`Could not find user with id ${req.params.id}`);
    }
};

//Update a band
const updateBand = async (req, res) => {
    const [bandUpdate] = await Bands.findAll({
        where: {
            id: req.params.id,
        }
    })
    bandUpdate.musicBands = req.body.musicBands;
    bandUpdate.genre = req.body.genre;

    await bandUpdate.save();
    res.status(200).send('Band updated successfully!');
};
//deleting a band
const deleteBand = async (req, res) => {
    const destroyCount = await Bands.destroy({
        where: {
            id: req.params.id,
        },
    });
    if (destroyCount === 0) res.status(404).send('Unable to find band to be deleted');
    else {
        res.status(200).send('Band was successfully deleted');
    }
};

module.exports = {
    createBand,
    allBands,
    getBand,
    deleteBand,
    updateBand
};
