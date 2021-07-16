const mongoose =require('mongoose');


const ListDeviceSchema=new mongoose.Schema({
    deviceID:{
        type: String,
        required: false
    },
    userID:{
        type:String,
        required:false
    }
});