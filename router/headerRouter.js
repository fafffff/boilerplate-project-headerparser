const express=require('express');
const router=express.Router();
const Header=require('../model/headerSchema')
router.get('/',async(req,res)=>{
    
const ipAddress=req.ip||req.connection.remoteAddress;
const language=req.headers['accept-language']||'Uknown';
const software=req.headers['user-agent']||'Unknown';
const response={
    ipAddress:ipAddress,
    language:language.split(',')[0],
    software:software.split('(')[1]?.split(')')[0]||'Uknown'
};
if(!ipAddress){
    return res.status(400).json({error:"IP Address not found"})
}
const newHeader=new Header(
    {
        ipAddress:response.ipAddress,
        language:response.language,
        software:response.software
    }
);
try{
    await newHeader.save();
res.json(response)

}catch(err){
    res.status(500).json({error:"Failed to save header data",details:err.message})
   
}}



);
module.exports=router;
