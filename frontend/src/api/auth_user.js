import {axiosInstance} from "../utils/axiosinstance.js";

export const loginUser=async (email,password)=>{
    const res=await axiosInstance.post("/api/auth/login",{email:email,password:password});
    return res.data;
}

export const registerUser=async (name,email,password)=>{
    await axiosInstance.post("/api/auth/register",{name:name,email:email,password:password});
}

export const logUserOut=async ()=>{
    const res=await axiosInstance.post("/api/auth/logout");
    return res.data;
}