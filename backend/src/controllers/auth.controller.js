import {register,login} from "../services/auth.services.js";
import cookieOptions from "../config/cookie_config.js";
import {findUserByID} from "../dao/user_data.js";

export const verify_user=async (req,res)=>{
    const email=req.body.email;
    const pwd=req.body.password;
    try{
        const {user,accessToken}=await login(email,pwd);
        res.cookie("accessToken",accessToken,cookieOptions);
        res.status(200).json({user:user,message:"Login Successful"});
    }
    catch(e){
        res.status(402).send(e.message);
    }
}

export const register_user=async (req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    const name=req.body.name;
    try{
        await register(email,password,name);
        res.status(200).send("Registration Successful!");
    }
    catch(e){
        res.status(400).send(e.message);
    }

}

export const isAuthenticated=async (req,res)=>{
    const user=await findUserByID(req.userid);
    user.password="***";
    res.status(200).json({user:user});
}

export const logUserOut=async (req,res)=>{
    res.clearCookie("accessToken", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    });

    return res.status(200).json({ message: "Logged out" });
}