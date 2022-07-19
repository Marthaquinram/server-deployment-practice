
const { Soccer } = require('../db');

//Creating a player
const createPlayer = async (req, res) => {
    const { soccerPlayer, team, age } = req.body;
    const player = Soccer.build({ soccerPlayer, team, age });
    await player.save();
    res.status(200).send(player);
};

//List ALL player
const allPlayers = async (req, res) => {
    const players = await Soccer.findAll();
    res.status(200).send(players);
};


//locating the player by their id (singular player)
const getPlayer = async (req, res) => {
    const teamPlayer = await Soccer.findAll({
        where: {
            id: req.params.id,
        },
    });
    if (teamPlayer.length > 0) {
        res.status(200).send(teamPlayer[0]);
    } else {
        res.status(404).send(`Could not find user with id ${req.params.id}`);
    }
};

//Update a player
const updatePlayer = async (req, res) => {
    const [playerUpdate] = await Soccer.findAll({
        where: {
            id: req.params.id,
        }
    })
    playerUpdate.soccerPlayer = req.body.soccerPlayer;
    playerUpdate.team = req.body.team;
    playerUpdate.age = req.body.age;

    await playerUpdate.save();
    res.status(200).send('Player updated successfully!');
};
// need mess around with this. could not get it to work.
// const playerUpdate = await Soccer.update(
//     {
//         soccerPlayer: req.body.soccerPlayer,
//         team: req.body.team,
//         age: req.body.age,
//     },
//     {
//         where: {
//             id: req.params.id
//         },
//     });
// await playerUpdate.save();



//deleting a player
const deletePlayer = async (req, res) => {
    const deleteCount = await Soccer.destroy({
        where: {
            id: req.params.id,
        },
    });
    if (deleteCount === 0) res.status(404).send('Unable to find player to be deleted');
    else {
        res.status(200).send('Player was successfully deleted');
    }
};




module.exports = {
    createPlayer,
    allPlayers,
    getPlayer,
    deletePlayer,
    updatePlayer
};
