import {createNewUser,createNewUserNoName} from "../dao/user_data.js";
import { signToken } from "../utils/helper.js";
import {findUserByEmailAndPassword} from "../dao/user_data.js";

export const login=async (email,password)=>{
    const user=await findUserByEmailAndPassword(email);
    if (!user || user.password !== password){
        throw new Error("Invalid Credentials");
    }
    else{
        user.password="***"
        return {user:user,accessToken:signToken({user:user._id})};
    }
}

export const register=async (email,password,name)=>{
    if (name){
        await createNewUserNoName(email,password);
    }
    else{
        await createNewUser(name,email,password);
    }
    
}