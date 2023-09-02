const mongoose=require('mongoose')
const express=require('express')
const cors=require('cors')
const app=express()
require('dotenv').config()
const allRoutes=require('./routes/api')
const MONGODB_SERVER=process.env.MONGODB_ATLAS


mongoose.connect(`${MONGODB_SERVER}/billingApplication`).then((res)=>console.log('connected to database')).catch((error)=>console.log(error))

app.use(express.json())
app.use(cors())
app.use('/api',allRoutes)

app.listen(3000,()=>{
    console.log('listening on port 3000')
})
