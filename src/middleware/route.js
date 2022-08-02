// const users = require('../models/index');
const express = require('express');
const userModel = require('../users/models');

const router = express.Router();

async function signupUser(req, res) {
    let obj = req.body;
    let newUser = await userModel.create(obj);
    res.status(200).json(newUser);
};

async function signinUser(req, res) {
    const user = await User.model.findOne({
        where: { username: req.body.username },
    });
    const isValid = await bcrypt.compare(req.body.password, user.password);
    if (isValid) {
        res.status(200).send(user);
    } else {
        res.status(403).send('Invalid username/password. too bad we dont have an account recovery mechanism');
    }
};

router.post('/signup', signupUser);
router.post('/signin', signinUser);

module.exports = router;
