const verifyJwt = require('../../Middlewares/VerifyJwt')
const authRouter=require('./auth')
const billRouter=require('./bills')
const customerRouter=require('./customers')
const paymentRouter=require('./payments')
const productRouter=require('./products')

const express=require('express')
const routes=express.Router()

routes.use('/auth',authRouter)
routes.use(verifyJwt)
routes.use('/customer',customerRouter)
routes.use('/bill',billRouter)
routes.use('/product',productRouter)
routes.use('/payment',paymentRouter)

module.exports=routes
