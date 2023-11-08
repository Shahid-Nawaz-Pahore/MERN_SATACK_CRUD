//
const express=require("express");
const mongoose = require('mongoose');

const app=express();
const PORT=5000;
mongoose.connect('mongodb://127.0.0.1:27017/mern_stack_crud').then(()=>{
    console.log("DB connection created successfully");
}).catch((error)=>{
    console.log(error)
});

app.get("/",(req,res)=>{
  res.send("this is basic route");
})
app.get("/shahid",(req,res)=>{
    res.send("this is basic shahid");
  })
app.listen(PORT,()=>{
    console.log(`server is running at ...${PORT}`)
})