import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/mongo.config.js";
import router from "./src/routes/get_short_url.routes.js";
import { redirectUrl } from "./src/controllers/get_short_url.controller.js";
import userrouter from "./src/routes/users_route.js"
import authrouter from "./src/routes/auth_route.js";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config("./.env");

const app=express();
const port=4000;

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//get route to redirect the custom url
// redirection just asks the browser to change the url to another,
// so there is no worry about origins, the shortener server never call the actual url

//post route to shorten
//check if the route given for shortening is valid or not 
//this route takes url from a html form and must store and return a funky url
app.use("/api/create",router);
app.use("/api/auth",authrouter);
app.use("/users",userrouter);

app.get("/:id",redirectUrl);

app.get("/",(req,res)=>{
    res.status(200).send("WELCOME TO FUNKYURL.COM");
});


app.listen(port,()=>{
    connectDB();
    console.log(`Server running on port http://localhost:4000`);
});

