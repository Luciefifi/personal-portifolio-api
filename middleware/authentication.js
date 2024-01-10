import Jwt from 'jsonwebtoken'

//middleware to verify token

const verifyToken =( req, res, next)=>{
    const token = req.header("auth_token")

    if(!token)
    {
        return res.status(401).json({
            status:'Fail',
            Message:"Please login to continue"
        })
    }

    try{
        const verified = Jwt.verify(token, process.env.JWT_SECRET)
        if(verified){
        req.user = verified
        }
        else{
            res.status(401).json({
                status:"fail",
                Message:"Login to continue"
            })
        }
        next();

    }
    catch(err)
    {
        if(err.expiredAt && err.expiresAr < new Date())
        {
            res.status(401).json({
                status:"Fail",
                Message:"Your token has expired, please login again"

            })
        }
        else{
            res.status(400).json({
                status:'Fail',
                Message:"Token is not valid"
            })
        }
        next();
            
        }
       
}

export default verifyToken