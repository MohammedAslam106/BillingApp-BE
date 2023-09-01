const express=require('express')
const mongoose=require('mongoose')

const customerSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    address:{
        type:{
            location:String,
            pincode:Number
        }
    },
    bills:[{type:mongoose.Types.ObjectId,ref:'Bill'}]
},{timestamps:true})

const Customer=new mongoose.model('Customer',customerSchema)

module.exports=Customer;