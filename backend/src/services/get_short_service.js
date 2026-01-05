import {generateNanoId} from "../utils/helper.js";
import dotenv from "dotenv";
import { createShortUrl, createShortUrlWithUser } from "../dao/short_url_data.js";
import { existSlug } from "../dao/short_url_data.js";

export const shortenWithoutUser= async (url)=>{
    const id=generateNanoId(7);
    const funky_url = await createShortUrl(id,url);
    return funky_url;
};

export const shortenWithUser=async (url,userid,slug=null)=>{
    const id=slug||generateNanoId(7);
    await existSlug((id));
    const funky_url = await createShortUrlWithUser(id,url,userid);
    return funky_url;
};