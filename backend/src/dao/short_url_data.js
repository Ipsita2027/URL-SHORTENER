import shortUrlModel from "../models/url-model.js";
import dotenv from "dotenv";

export const createShortUrl = async (surl,lurl)=>{
    const newDocument=new shortUrlModel({
        short_url:surl,
        full_url:lurl,
    });
    await newDocument.save();
    return process.env.APP_URL+newDocument.short_url;
}

export const createShortUrlWithUser=async (surl,lurl,userid) =>{
    const newDocument=new shortUrlModel({
        short_url:surl,
        full_url:lurl,
        user:userid,
    });
    await newDocument.save();
    return process.env.APP_URL+newDocument.short_url;
}

export const fetchOgUrl=async (id)=>{
    const doc=await shortUrlModel.findOneAndUpdate({short_url:id},{$inc:{clicks:1}});
    return doc.full_url;

}

export const existSlug=async (slug)=>{
    const doc=await shortUrlModel.findOne({short_url:slug});
    if (doc){
        throw new Error("custom value taken");
    }
    
}

export const findUserUrls=async(userid)=>{
    const urls=await shortUrlModel.find({user:userid});
    return urls;
}
