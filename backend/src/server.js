import express from "express";
import dotenv from "dotenv";
import { ENV } from "./lib/env.js"
import { connectDB } from "./lib/db.js";
const app = express();
dotenv.config();
app.get("/" , (req,res)=>{
   console.log("hello");
   res.end;
});
console.log("hello");
console.log(ENV.PORT);

const startServer = async () => {
    try{
        await connectDB();
        app.listen(ENV.PORT , ()=>{
            console.log("server is running on port " , ENV.PORT);
        });
        connectDB();
    }catch(error){
        console.log("errro " , error);
    }
}
startServer();