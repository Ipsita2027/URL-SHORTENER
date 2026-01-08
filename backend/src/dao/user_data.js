import userModel from "../models/user-model.js";

import { findUserUrls } from "./short_url_data.js";

export const createNewUser=async (name,email,password)=>{
    const user=await userModel.findOne({useremail:email});
    if (!user){
        const newUser=userModel({
        displayName:name,
        useremail:email,
        password:password
    });
    await newUser.save();
    }
    else{
        throw new Error("User already exists!");
    }
}

export const createNewUserNoName=async(email,password)=>{
    const user=await userModel.findOne({useremail:email});
    if (!user){
        const newUser=userModel({
        useremail:email,
        password:password
    });
    await newUser.save();
    }
    else{
        throw new Error("User already exists!");
    }
    
}

export const findUserByEmail=async (email)=>{
    const user=await userModel.findOne({useremail:email});
    return user;
    
}

export const findUserByEmailAndPassword=async (email)=>{
    const user=await userModel.findOne({useremail:email}).select("+password");
    return user;
    
}

export const findUserByID=async (userid)=>{
    const user=await userModel.findById(userid);
    if (user){
        const urls=findUserUrls(user._id)
        return urls;
    }
}
