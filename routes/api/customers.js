const express=require('express')
const routes=express.Router()
const Customer=require('../../Schemas/customer')

routes.get('/',async(req,res)=>{
    try{
        const user=req.user
        const response=await Customer.find()
        res.json({response:response})
    }
    catch(error){
        res.json({error:error.message || error})
    }
})

routes.get('/:id',async(req,res)=>{
    try{
        const user=req.user
        const response=await Customer.findOne(
            {_id:req.params.id}
        )
        res.json({response:response})
    }
    catch(error){
        res.json({error:error.message || error})
    }
})

routes.post('/',async(req,res)=>{
    try{
        const user=req.user;
        const body=req.body
        const response=await Customer.create({
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
        const body=req.body
        const response=await Customer.updateOne(
            {
                _id:req.params.id
            },
            {
                $set:body
            },
            {runValidators:true}
        )
        res.json({response:response})
    }
    catch(error){
        res.json({error:error.message || error})
    }
})

routes.delete('/:id',async(req,res)=>{
    try{
        const user=req.user
        const response=Customer.deleteOne(
            {_id:req.params.id}
        )
        res.json({response:response})
    }
    catch(error){
        res.json({error:error.message || error})
    }
})

module.exports=routes;