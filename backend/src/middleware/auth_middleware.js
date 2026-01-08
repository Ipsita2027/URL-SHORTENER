import { verifyToken } from "../utils/helper.js";
import { getAccessToken } from "../utils/helper.js";

export const authWareMandatory=(req,res,next)=>{
    const token=getAccessToken(req.cookies);
    if (!token){
        res.status(402).send("Unauthorized");
    }
    else{
        try{
            const decoded=verifyToken(token);
            req.userid=decoded.user;
            next();
        }
        catch(e){
            res.status(401).send("Unauthorized");
        }
    }
}

export const authWare=(req,res,next)=>{
    const token=getAccessToken(req.cookies);
    if (token){
        try{
            const decoded=verifyToken(token);
            req.userid = decoded.user;
            next();
        }
        catch(e){
            res.status(401).send("Unauthorized");
        } 
    }
    else{
        return next();
    }
}