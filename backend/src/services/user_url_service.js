import {findUserUrls} from "../dao/short_url_data.js";

export const getUrlsForUser=async (userid)=>{
    const user_urls=await findUserUrls(userid);
    return user_urls;
}

