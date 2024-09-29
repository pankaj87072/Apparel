// const mongoose=require('mongoose');
const mongoose=require('mongoose');
const schema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    entityid:{
        type:String,
        required:true,
    }
});
const mvp_users_detail=mongoose.model('mvp_user_detail',schema);
module.exports= mvp_users_detail;