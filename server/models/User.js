const mongoose = require("mongoose");

const UserSchema =  new mongoose.Schema({
    firstName : {type: String, required: true, unique : false, index:false},
    middleName : {type: String, required: false, index:false},
    lastName : {type: String, required: true, unique : false, index:false },
    country : {type: String, required: true, unique : false, index:false},
    email : {type: String, required: true, unique: true, index:true},
    adhar:{type:String},
    passport:{type:String},
},
{timestamps : true})


module.exports = mongoose.model("User", UserSchema);