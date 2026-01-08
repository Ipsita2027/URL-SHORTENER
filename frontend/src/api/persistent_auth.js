import {store} from "../store/store.js";
import {login,logout} from "../store/slices/authSlice.js";
import {axiosInstance} from "../utils/axiosinstance.js";
import {redirect} from "@tanstack/react-router";

export const checkAuth=async ()=>{
    const {isAuthenticated}=store.getState().auth;
    if (isAuthenticated!='T'){
        try{
        console.log("About to send req for checkAuth")
        const resp=await axiosInstance.get("/api/auth/me");
        console.log("request sent for checkAuth")
        const urls=resp.data;
        console.log(urls)
        store.dispatch(login(urls));
        return true;
    }
    catch(e){
        throw redirect({to: "/auth",});
    }
    
    }
}

export const initialCheckAuth=async()=>{
    const {isAuthenticated}=store.getState().auth;
    if (isAuthenticated!='U'){
        return true
    }
    else{
        try{
        const resp=await axiosInstance.get("/api/auth/me");
        const user=resp.data;
        if (!user){
            throw new Error("Unauthorized");
        }
        store.dispatch(login(user));
        return true;
        }
        catch(e){
            store.dispatch(logout());
            return true;
        }
    }
}