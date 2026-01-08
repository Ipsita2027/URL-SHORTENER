import {getUrlsForUser} from "../services/user_url_service.js";

export const getAllUserUrls=async (req ,res)=>{
    const userid=req.userid;
    try{
        const userUrls=await getUrlsForUser(userid);
        res.status(200).json(userUrls);
        console.log(userUrls);
    }
    catch(e){
        res.status(400).send(e.message);
    }

}