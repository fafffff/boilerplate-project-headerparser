require("dotenv").config();
const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const path=require("path");
const app=express();
const headerRouter=require('./router/headerRouter');

mongoose.connect(process.env.MONGO_URI).then(()=>console.log("Connected to Mongo DB"))
.catch((err)=>console.error("Mongo connection error:",err));

app.use('/Header',headerRouter);
app.use(express.static(path.join(__dirname,'public')))

app.listen(process.env.PORT||3000,()=>console.log(`server is running on port ${process.env.PORT||3000}`))