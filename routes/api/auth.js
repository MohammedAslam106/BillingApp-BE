const express=require('express')
const routes=express.Router()
const User=require('../../Schemas/user')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const PRIVATE_KEY=process.env.PRIVATE_KEY


// routes.post('/signup',async(req,res)=>{
//     try{
//         const body=req.body;
//         const response=await User.create(
//             {
//                 ...body
//             }
//         )
//         res.json({message:response})
//     }
//     catch(error){
//         res.json({error:error})
//     }
// })


routes.post('/signin',async(req,res)=>{
    try{
        const body=req.body;
        const response=await User.findOne({
            username:body.username
        })
        if(!response){
            res.status(400).json({message:'User Not Found'})
            return
        }
        const checkPassword=bcrypt.compareSync(body.password,response.password)
        if(!checkPassword){
            res.status(403).json({message:"Wrong password"})
            return
        }
        const token=jwt.sign({...response._doc},PRIVATE_KEY)
        res.json({token:token})
    }
    catch(error){
        res.json({error:error})
    }
})

module.exports=routes;