const { DataTypes } = require('sequelize');

function bands(db) {
    return db.define('Bands', {
        musicBands: DataTypes.STRING,
        genre: DataTypes.STRING,
    });
}

module.exports = { bands };
