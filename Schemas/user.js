const validateEmail=(email)=>{
    const pattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return pattern.test(email)
}

const express=require('express')
const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    name:{type:String},
    username:{
        type:String,
        trim:true,
        lowercase:true,
        unique:true,
        required:"This field is mandatory",
        validate:[validateEmail,'Provide the valid email']
    },
    password:{
        type:String,
        trim:true,
        required:"This field is mandatory",
        mathch:[/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,"Please meet the password requirements"]
    },
    dob:{
        type:Date,
    },
    address:{
        type:{
            location:{
                type:String,
            },
            pincode:Number
        }
    },
},{timestamps:true});


const User=new mongoose.model('User',userSchema)

module.exports=User;