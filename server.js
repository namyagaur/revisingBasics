const express = require("express");
const app = express();

app.get('/',(req,res)=>{
    res.send("Welcome to task api");
});
app.get('/about',(req,res)=>{
    res.send("This is my first backend project");
});
app.get('/health',(req,res)=>{
    res.json({status : "healthy"});
});

app.listen(3000, ()=>{
    console.log("this is working");
});