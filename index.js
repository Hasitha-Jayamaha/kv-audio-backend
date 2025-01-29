import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import userRouter from "./routes/userRouter.js";
import productRouter from "./routes/productRouter.js";
import jwt from "jsonwebtoken"


const app = express()

app.use(bodyParser.json())

  app.use((req,res,next) => {

   let token = req.header
   ("Authorization");

   if (token != null) {
    token = token.replace("Bearer ","");
    console.log(token);
 
    jwt.verify(token, "kv-secret-89!",
        (err, decoded) => {
            console.log(err);
            if(!err){
                req.user = decoded;
            }
         }); 
   }
   next()
 });


let mongoUrl = "mongodb+srv://hasitha:9933@cluster0.usall.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(mongoUrl)

const connection = mongoose.connection

connection.once("open",()=>{
    console.log("MongoDB connection established successfuly")
}
)

app.use("/api/users",userRouter)
app.use("/api/products",productRouter)

app.listen(3000,()=> {
    console.log("server is running on port 3000");

});

