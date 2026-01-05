import {axiosInstance} from "../utils/axiosinstance";

export const fetchSUrl=async (url,slug=null)=>{
    if (slug){
        const endpoint="/api/create/custom";
        const resp=await axiosInstance.post(endpoint,{url:url,customValue:slug});
        return resp.data;
    }
    else{
        const endpoint="/api/create";
        const resp=await axiosInstance.post(endpoint,{url:url});
        return resp.data;
    }
    
    
}

