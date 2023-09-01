const express=require('express')
const routes=express.Router()
const Payment=require('../../Schemas/payment')


routes.get('/',async(req,res)=>{
    try{
        const user=req.user
        const {bill}=req.query
        const response=await Payment.find().populate('bill customer')
        res.json({response:response})
    }
    catch(error){
        res.json({error:error.message || error})
    }
})


routes.get('/:id',async(req,res)=>{
    try{
        const user=req.user
        const {bill}=req.query
        const response=Payment.findOne({
            bill:bill,
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
        const body=req.body
        const user=req.user
        const response=await Payment.create(
           { 
            ...body
        }
        )
        res.json({response:response})
    }
    catch(error){
        res.json({error:error.message || error})
    }
})


routes.patch('/:id',async(req,res)=>{
    try{
        const user =req.user
        const {bill}=req.query
        const response=Payment.updateOne({
            bill:bill,
            _id:req.params.id
        },{$set:req.body},{runValidators:true})
        res.json({response:response})
    }
    catch(error){
        res.json({error:error.message || error})
    }
})


routes.delete('/:id',async(req,res)=>{
    try{
        const user=req.user
        const response=await Payment.deleteOne({
            _id:req.params.id
        })
        res.json({response:response})
    }
    catch(error){
        console.log(error)
        res.json({error:error.message || error})
    }
})

module.exports =routes;