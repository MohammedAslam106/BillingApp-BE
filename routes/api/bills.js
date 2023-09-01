const express=require('express')
const routes=express.Router()
const Bill=require('../../Schemas/bill')
const queryString=require('querystring')

routes.get('/',async(req,res)=>{
    try{
        const user=req.user
        const {customer}=req.query
        // const query=req.query
        // const values=queryString.parse(query)  -->result {key:pair,key:pair...}
        const response= await Bill.find().populate('items.product payments customer')
        res.json({response:response})
    }
    catch(error){
        res.json({error:error.message || error})
    }
})

routes.get('/:id',async(req,res)=>{
    try{
        const user=req.user;
        const {customer}=req.query
        const response=await Bill.findOne({
            customer:customer,
            _id:req.params.id
        }).populate('items.product payments customer')
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
        // console.log(user)
        const response=await Bill.create(
            {...body}
        )
        res.json({response:response})
    }
    catch(error){
        console.log(error)
        res.json({error:error.message || error})
    }
})

routes.patch('/:id',async(req,res)=>{
    try{
        const user=req.user
        const body=req.body
        const response=await Bill.updateOne({
            _id:req.params.id
        },
        {
            $set:body
        },{runValidators:true}
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
        const response = await Bill.deleteOne({
            _id:req.params.id
        })
        res.json({response:response})
    }
    catch(error){
        res.json({error:error.message || error})
    }
})

module.exports=routes;