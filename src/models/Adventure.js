const mongoose = require('mongoose');

const adventureSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    description:{
        type:String,
        requred:true
    },
    price:{
        type:Number,
        required:true
    },
    places:[{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }]
});

const Adventure = mongoose.model('Adventure',adventureSchema);

module.exports = Adventure;