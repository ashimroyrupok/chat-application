const jwt=require('jsonwebtoken')

const setToken =async(res,result)=>{

    const token = jwt.sign({_id:result._id},process.env.JWT_SECRET_KEY)
    
    return res.status(200).cookie("token",token,{
        maxAge:24*60*60*1000,
        httpOnly:true,
        sameSite:"none",
        secure:true
    }).json({message:"user created successfully"})
}


module.exports= setToken;