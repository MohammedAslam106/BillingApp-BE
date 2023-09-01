const express=require('express')
const routes=express.Router()
const Product=require('../../Schemas/product')


routes.get('/',async(req,res)=>{
    try{
        const user=req.user
        const response=await Product.find()
        res.json({response:response})
    }
    catch(error){
        res.json({error:error.message || error})
    }
})


routes.get('/:id',async(req,res)=>{
    try{
        const user=req.user
        const response=await Product.findOne({
            _id:req.params.id
        })
        res.json({response:response})
    }
    catch(error){
        res.json({error:error.message || error})
    }
})


routes.post('/',async(req,res)=>{
    try{
        const user=req.user
        const body=req.body
        const response=await Product.create({
            ...body
        })
        res.json({response:response})
    }
    catch(error){
        res.json({error:error.message || error})
    }
})


routes.patch('/:id',async(req,res)=>{
    try{
        const user=req.user;
        const response=await Product.updateOne({
            _id:req.params.id
        },
        {$set:req.body},{runValidators:true})
        res.json({response:response})
    }
    catch(error){
        res.json({error:error.message || error})
    }
})


routes.delete('/:id',async(req,res)=>{
    try{
        const user=req.user
        const response=await Product.deleteOne({
            _id:req.params.id
        })
        res.json({response:response})
    }
    catch(error){
        res.json({error:error.message || error})
    }
})

module.exports =routes;