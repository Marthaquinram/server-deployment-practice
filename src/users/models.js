//for password, we could make hasing the responsibility of the handler.

const signupHandler = async (req, res) => {
    let { username, password } = req.body;
    password = await bcrypt.hash(password);
    const user = UserCollection.create({ username, password });
}

const userModel = (sequelize, DataTypes) => {
    const model = sequelize.define('User', {
        username: { type: DataTypes.STRING, allowNull: false, unique: true },
        password: { type: DataTypes.STRING, allowNull: false },
    });

    // alternatively, make hashing the responsibility of the model
    model.beforeCreate(async (user) => {
        let hashedPassword = await bcrypt.has(user.password, HASH_STRENGTH);
        user.password = hashedPassword;
        //now , all the handler needs to do is call new User(username, password).create
    });


    return model;
}
module.exports = userModel;
