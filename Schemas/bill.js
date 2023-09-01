const express=require('express')
const mongoose=require('mongoose')

const billSchema=new mongoose.Schema({
    billNumber:{
        type:Number,
        required:true,
        unique:true
    },
    customer:{
        type:mongoose.Types.ObjectId,
        ref:'Customer',
        required:true
    },
    items:[
        {type: {
            product:{
                type:mongoose.Types.ObjectId,
                ref:'Product',
                required:true
            },
            quantity:Number,
            price:Number,
        },
        required:true
    }],
    totalAmount:Number,
    paidAmount:Number,
    balanceAmount:Number,
    payments:[{type:mongoose.Types.ObjectId,ref:'Payment'}]
    
},{timestamps:true})


const Bill=new mongoose.model('Bill',billSchema)
module.exports=Bill;