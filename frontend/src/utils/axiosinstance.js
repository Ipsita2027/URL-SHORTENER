import axios from "axios";

export const axiosInstance=axios.create({
    baseURL:"https://url-shortener-2yiq.onrender.com",
    withCredentials:true
});

axiosInstance.interceptors.response.use(
    (response)=>{
        return response;
    },
    (error)=>{
        if (error.response){
            const {status,data}=error.response;
            switch(status){
                case 401:
                    console.error(`Bad Request: ${data}`);
                default:
                    console.error(`Server Error ${status}: ${data}`);
            }
        }
        else if(error.request){
            console.error(`Network Error: No Response Received`);
        }
        else{
            console.error(`Error: ${error.message}`);
        }
        return Promise.reject({
            message:error.response.data,
        });
    }
);