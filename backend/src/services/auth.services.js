import {createNewUser,createNewUserNoName} from "../dao/user_data.js";
import { signToken } from "../utils/helper.js";
import {findUserByEmailAndPassword} from "../dao/user_data.js";
import bcrypt from "bcrypt";

export const login=async (email,password)=>{
    const user=await findUserByEmailAndPassword(email);
    if (!user || !bcrypt.compare(password,user.password)){
        throw new Error("Invalid Credentials");
    }
    else{
        user.password="***"
        return {user:user,accessToken:signToken({user:user._id})};
    }
}

export const register=async (email,password,name)=>{
    const hashed_password=await bcrypt.hash(password,Number(process.env.ROUNDS))
    if (name){
        await createNewUserNoName(email,hashed_password);
    }
    else{
        await createNewUser(name,email,hashed_password);
    }
    
}