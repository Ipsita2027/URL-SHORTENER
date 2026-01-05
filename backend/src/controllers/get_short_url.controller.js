import {shortenWithoutUser,shortenWithUser} from "../services/get_short_service.js";
import {valid_url} from "../utils/helper.js";
import {fetchOgUrl} from "../dao/short_url_data.js";

//Controllers contain the route handler functions definitions and rendering statements too
export const shortenUrl=async (req,res)=>{
    const url=req.body.url;
    const userid=req.userid;
    if (valid_url(url)){
        try{
            if (userid){
                const funky_url= await shortenWithUser(url,userid);
                res.status(200).send(funky_url);
            }
            else{
                const funky_url= await shortenWithoutUser(url);
                res.status(200).send(funky_url);
            }
        }
        catch(e){
            res.status(402).send("Error processing your request");
        }
    }
    else{
        res.status(402).send("The provided URL should be of form https://domain/endpoint");
    }
}

export const redirectUrl=async (req,res)=>{
    const short_url=req.params.id;
    try{
        const og_url=await fetchOgUrl(short_url);
        res.redirect(og_url);
    }
    catch(e){
        res.status(404).send("URL could not be resolved");
    }
    
}

export const shortenUrlCustom=async (req,res)=>{
    const url=req.body.url;
    const slug=req.body.customValue;
    const userid=req.userid;
    try{
        const funky_url=await shortenWithUser(url,userid,slug);
        res.status(200).send(funky_url);
    }
    catch(e){
        res.status(405).send(e.message);
    }
}