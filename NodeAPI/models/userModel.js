const deviceModel=require('./deviceModel')
const mongoose =require('mongoose');


var UserSchema =new mongoose.Schema({
username:{
    type:String,
   required:'username'
},
password:{
    type:String,
    required:'password'
},
displayName:{
    type:String,
    required:'displayName'
},
address:{
    type:String,
    required:'address'
},
phone:{
    type:String,
    required:'phone'
}
,
deviceOwner: {
    type:deviceModel,
    required:false
},
token:{
    type:String,
    required:false
}
});

module.exports = mongoose.model('User',UserSchema);