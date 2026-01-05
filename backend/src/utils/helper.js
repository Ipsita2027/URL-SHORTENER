import { nanoid } from "nanoid";
import crypto from "crypto";
import jwt from "jsonwebtoken";

export const generateNanoId = ()=>{
    return nanoid(7);
}

export const valid_url = (url)=>{
    return true;
}

export const gravatarUrl=(email)=>{
    const hash=crypto.createHash("md5").update(email.trim().toLowerCase()).digest("hex");
    return `https://www.gravatar.com/avatar/${hash}?d=mp`;
}

export const signToken=(payload)=>{
    return jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:process.env.ACCESS_TOKEN_EXPIRY});
}

export const verifyToken=(token)=>{
    return jwt.verify(token,process.env.JWT_SECRET);
}

export const getAccessToken=(cookies)=>{
    return cookies?.accessToken;
}