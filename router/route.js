const express=require('express');
const {handleforminput} = require('../controller/Controller');
const {handleLogin,handleSignUp}=require('../controller/Logincontroll');
const router=express.Router();
router.post('/',handleforminput);
router.post('/Signup',handleSignUp);
router.post('/Login',handleLogin);
// router.delete('/',handeldelete);
module.exports=router;