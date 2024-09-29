const mongoose=require('mongoose');
const UserScehma=new mongoose.Schema({
    Item_type:{
        type:String,
        required:true,
    },
    Color:{
        type:String,
        required:true,
    },
    Size:{
        type:String,
        required:true,
    },
    Condition:{
        type:String,
        required:true,
    },
    Prefer_method:{
        type:String,
        required:true,
    }
});
const URL=mongoose.model("MVP_USER",UserScehma);
module.exports=URL;