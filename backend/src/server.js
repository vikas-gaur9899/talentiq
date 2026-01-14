import express from "express";
import dotenv from "dotenv";
import { ENV } from "./lib/env.js"
 const app = express();
dotenv.config();
app.get("/" , (req,res)=>{
   console.log("hello");
   res.end;
});
console.log("hello");
console.log(ENV.PORT);
app.listen("3000" , ()=>{
    console.log("sever listening");
})