const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { SALT_ROUNDS,SECRET } =require('../../config/env')


exports.create = async (userData) => {

    if (userData.password.length < 4) {
        throw {
            error:'Password shoud be atleast 4 characters long!'
        };
    }

    const user = await User.create(userData);

    return user;
};

exports.createToken = (user) => {
    const payload = {_id: user._id , email: user.email};
    const option = { expiresIn: '2d' }
    return new Promise((resolve,reject) => {
        jwt.sign( payload, SECRET, option ,(err,decodedToken) => {

            if (err) {
                return reject(err);
            }

            resolve(decodedToken);
        })
    });

}

