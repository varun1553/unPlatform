const express=require("express");
const router=express.Router();
const db=require("../models");


// get all todos
router.get("/all",(req,res)=>{
    db.likes.findAll().then(obj=>res.send(obj));
});

//post new todo
router.post("/new",(req,res)=>{
    //console.log(req.body);
    db.likes.create({
        likecnt:100
    }).then(()=>res.send("success"))
    .catch((err)=>{console.log("Error:",err)});
});





module.exports=router;
 