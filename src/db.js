const { DataTypes, Sequelize } = require('sequelize');

const db = new Sequelize('sqlite::memory:');

// const User = db.define('User', {
//     username: DataTypes.STRING,
//     birthday: DataTypes.DATE
// });

const Soccer = db.define('Soccer', {
    soccerPlayer: DataTypes.STRING,
    team: DataTypes.STRING,
    age: DataTypes.NUMBER,
});

db.sync();

module.exports = {
    db,
    Soccer,
};
