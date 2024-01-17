import Jwt from 'jsonwebtoken'

const verifyAdmin = (req, res, next) =>{
    const token = req.header("auth_token")
    if(!token)
    {
        res.status(401).json({
            status:'Fail',
            Message:"Login first to continue"
        })
    }
    try{
const decodedToken = Jwt.verify(token, process.env.JWT_SECRET)

    req.user = decodedToken.user
    const userRole = req.user.role
    console.log("user role", userRole)
    if(userRole !== "Admin")
    {
        res.status(403).json({
            status:"fail",
            message:"You are not allowed to perfom this action"
        })
    }




    }
    catch(err)
    {
res.status(500).json({
    status:"Fail",
    Message: err.message

})
    }
    next();
}

export default verifyAdmin;