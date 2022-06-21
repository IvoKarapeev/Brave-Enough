const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/Adventures';

exports.initizeDatabase = () => mongoose.connect(url);