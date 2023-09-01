const express=require('express');
const mongoose=require('mongoose')

const paymentSchema=new mongoose.Schema({
    bill:{
        type:mongoose.Types.ObjectId,
        ref:'Bill'
    },
    customer:{
        type:mongoose.Types.ObjectId,
        ref:'Customer',
    },
    paidAmount:{
        type:Number,
        required:true
    }
},{timestamps:true})

const Payment=new mongoose.model('Payment',paymentSchema);

module.exports=Payment;