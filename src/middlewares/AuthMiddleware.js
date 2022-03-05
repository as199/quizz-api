const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config()
module.exports ={
    checkToken: (req, res, next)=>{
        let token = req.get("authorization");
        if(token){
            token = token.slice(7);
            jwt.verify(token, process.env.SECRET_KEY,(err,decode)=>{
                if(err){
                    res.json({
                        success: false,
                        message: "Invalid token"
                    });
                }else{
                    next();
                }
            })
        }else{
            res.json({
                success: false,
                message:"Access denied unauthorized user"
            })
        }
    }
}