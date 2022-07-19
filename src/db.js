const { Sequelize } = require('sequelize');
const { soccer } = require('./models/soccer');
const { bands } = require('./models/bands')

//get the database connection
let connection_string;
switch (process.env.NODE_ENV) {
    case 'production':
        connection_string = process.env.DATABASE_URL;
        break;
    case 'dev':
        connection_string = 'sqlite::memory:';
        break;
    case 'staging':
    default:
        connection_string = `sqlite:${process.env.SQLITE_FILE ?? './db'}`;
        break;
}

const db = new Sequelize(connection_string, {
    // For postgres only
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
});

// const User = db.define('User', {
//     username: DataTypes.STRING,
//     birthday: DataTypes.DATE
// });

// const Soccer = db.define('Soccer', {
//     soccerPlayer: DataTypes.STRING,
//     team: DataTypes.STRING,
//     age: DataTypes.NUMBER,
// });

db.sync();

module.exports = {
    db,
    Soccer: soccer(db),
    Bands: bands(db),
};
