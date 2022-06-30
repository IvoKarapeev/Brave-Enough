const mongoose = require('mongoose');

const url = 'mongodb+srv://Ivo:CodingIsGood123@ivocorp.meizoti.mongodb.net/test';

exports.initizeDatabase = () => mongoose.connect(url);