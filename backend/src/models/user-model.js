import mongoose from "mongoose";
import {gravatarUrl} from "../utils/helper.js";

const userSchema=mongoose.Schema({
    useremail:{
        type:String,
        required:true,
        unique:true
    },
    displayName:{
        type:String,
        default: function(){
            return this.useremail;
        }
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    avatar:{
        type:String,
        default:function(){
            return gravatarUrl(this.useremail);
        }
    }
});

const userModel=mongoose.model("user",userSchema);

export default userModel;