import mongoose from "mongoose";

const connectDB = async ()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB connected : ${conn.connection.host}`);
    }
    catch(e){
        console.error(`Error connecting to MongoDB: ${e}`);
        process.exit(1);
    }

};

export default connectDB;