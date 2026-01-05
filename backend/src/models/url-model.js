import mongoose from "mongoose";
//This just defines the document schema and does not communicate with the mongoDB server
const urlDocSchema=new mongoose.Schema({
    short_url:{
        type:String,
        required:true,
        index:true,
        unique:true
    },
    full_url:{
        type:String,
        required:true,
    },
    clicks:{
        type:Number,
        required: true,
        default: 0,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

}); 

//This model interface store the schema definition and calling the model function
//creates a collection name short_urls(s appended) in the database selected in connectDB
//if the collection does not exist already in the database
const shortUrlModel=mongoose.model("short_url",urlDocSchema);//shortUrl is the interface to the collections short-urls, created in mongodb

export default shortUrlModel;