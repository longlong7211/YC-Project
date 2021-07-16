const mongoose =require('mongoose');


const DevicSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    location:{
        type:String,
        required: true,
    },
    owner: {
        type: String,
        required: true,
    },

});