const mvp_user_detail=require('../model/loginschema');
async function handleSignUp(req,res){
    const values=req.body;
    mvp_user_detail.create({
       name:values.username,
       email:values.useremail,
       password:values.userpassword,
       entityid:values.entityid,
    });
    res.send("post is done and a user is added in database");
   }
   async function handleLogin(req,res){
       const val=req.body;
      const userdata=await mvp_user_detail.findOne({email:val.email});
      console.log(userdata);
      if(!userdata){
       console.log("No data Found ");
       res.status(400).send("No data Found");
       return;}
     const users=userdata.toObject();
       if(users.password===val.password){
         console.log("Login successful");
       }else{
       console.log("Wrong Password try again");
       return;
      }
      res.send("Found the user you are good to go:"+JSON.stringify(users));
   };
   module.exports={handleSignUp,handleLogin};