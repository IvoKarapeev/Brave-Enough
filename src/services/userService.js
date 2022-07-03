const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const { SALT_ROUNDS,SECRET } =require('../../config/env')


exports.create = async (email,password) => {

    if (password.length < 4) {
        throw {
            error:'Password shoud be atleast 4 characters long!'
        };
    };

    password = await bcrypt.hash(password,SALT_ROUNDS);

    const userData = {
        email,
        password
    };

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

};

exports.login = async (email, password) => {

    const user = await User.findOne({email});

    if (!user) {
        throw { error: 'Cannot find user!' }
    };

    const isAuntenticated = await bcrypt.compare(password,user.password);

    if (!isAuntenticated) {
        throw { error: 'Wrong username or password!' }
    };

    return user;
};

exports.getOneDetailed = (userId) => User.findById(userId).populate('adventures');
