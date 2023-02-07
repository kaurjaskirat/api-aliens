const express=require("express");
const Alien=require('../models/alien')

const router=express.Router()

router.get("/",async(req,res)=>{
    try{
        const aliens= await Alien.find()
            res.json(aliens)
    }catch(err){
        res.send('error'+err)
    }
})
router.post('/',async(req,res)=>{
    const alien=new Alien({
        name:req.body.name,
        tech:req.body.tech,

    })
    try{
const a1=await alien.save()
res.json(a1)
    }catch(err){
res.send('error')
    }
})
router.patch('/:id',async(req,res)=>{
    try{
        const alien=await Alien.findById(req.params.id)
        alien.tech=req.body.tech
        const a1=await alien.save()
        res.json(a1)
    }catch(err){
res.send('error')
    }
})

router.delete('/:id',async(req,res)=>{
    try{
        const alien=await Alien.findById(req.params.id)
        alien.tech=req.body.tech
        const a1=await alien.remove()
        res.json(a1)
    }catch(err){
res.send('error')
    }
})



module.exports = router;