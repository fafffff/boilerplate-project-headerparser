const express=require('express');
const router=express.Router();
const Header=require('../model/headerSchema')
router.get('/:Router',async(req,res)=>{
const ipAddress=req.ip||req.connection.remoteAddress;
const language=req.headers['accept-language']||'Uknown';
const software=req.headers['user-agent']||'Unknown';
const response={
    ipAddress:ipAddress,
    language:language.split(',')[0],
    software:software.split('(')[1]?.split(')')[0]||'Uknown'
};
res.json(response)
}

);
module.exports=router;
