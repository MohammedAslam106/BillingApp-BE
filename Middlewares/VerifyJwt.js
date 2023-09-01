const jwt=require('jsonwebtoken')

const verifyJwt=(req,res,next)=>{
    const authorization=req.headers.authorization;
    if(!authorization){
        res.json({message:'Sign in first'})
        return
    }
    const token=authorization.replace('Bearer ','').trim()
    jwt.verify(token,process.env.PRIVATE_KEY,(error,user)=>{
        if(error){
            res.json({error:error.message || error})
            return
        }
        req.user=user
        next()
    })
}

module.exports=verifyJwt