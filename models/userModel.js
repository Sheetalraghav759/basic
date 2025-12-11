const mongoose= require("mongoose");

 const userModelSchema=new mongoose.Schema({
    name:String,
    phone:Number,

 })

 module.exports= mongoose.model("UserModel",userModelSchema)



