//
const express=require("express");
const app=express();
const PORT=5000;

app.get("/",(req,res)=>{
  res.send("this is basic route");
})
app.get("/shahid",(req,res)=>{
    res.send("this is basic shahid");
  })
app.listen(PORT,()=>{
    console.log(`server is running at ...${PORT}`)
})