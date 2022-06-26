const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required:true,
        minlength:[10,'The email should be at ten 10 characters long']
    },
    password: {
        type: String,
        required:true
    }
});

const User = mongoose.model('User',userSchema);

module.exports = User;