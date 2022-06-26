const User = require('../models/User');

exports.create = async (userData) => {

    if (userData.password.length < 4) {
        throw {
            error:'Password shoud be atleast 4 characters long!'
        };
    }

    const user = await User.create(userData);

    return user;
}

