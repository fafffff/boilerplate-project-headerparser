const express=require('express');
const mongoose=require('mongoose');
const headerSchema=new mongoose.Schema({
    ipAddress:{type:String,required:true},
    language:{type:String,required:true},
    software:{type:String,required:true},
    createdAt:{type:Date,default:Date.now}
})
const Header=mongoose.model('Header',headerSchema)
module.exports=Header;