const { DataTypes } = require('sequelize');

function soccer(db) {
    return db.define('Soccer', {
        soccerPlayer: DataTypes.STRING,
        team: DataTypes.STRING,
        age: DataTypes.NUMBER,
    });
}

module.exports = { soccer };
