const express=require('express');
const app=express();
const PORT=process.env.PORT||6060;
const path=require('node:path');
const userrouter=require('./router/route');
const DB =require('./Dbconnection/DBConnection');
const cors = require('cors');
const dotenv=require('dotenv');

app.use(cors());
dotenv.config();

//connecting frontend
app.use(express.static(path.join(__dirname,'./frontend/build')));

app.get('*',(req,resp)=>{
    console.log("wokring");
    resp.sendFile(
        path.join(__dirname,'./frontend/build/index.html'),
        function (err){
            resp.status(500).send(err)
        }    
    )
});

//connection to mongo
DB();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/user',userrouter);
app.listen(PORT,()=>{
    console.log("The server is running on Port:"+PORT);
});