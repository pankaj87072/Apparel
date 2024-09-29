const mongoose=require('mongoose');
const DB=async ()=>{
   try{
    //dbconnection 
 await mongoose.connect(process.env.MONGODB_URL);
  console.log("connecting to database");
   }catch{
    console.error("Error connecting mongo");
   }
}
module.exports=DB;