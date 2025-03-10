import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import userRouter from "./routes/userRouter.js";
import productRouter from "./routes/productRouter.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import reviewRouter from "./routes/reviewRouter.js";
import inquiryRouter from "./routes/inquiryRouter.js";

dotenv.config();


const app = express();

app.use(bodyParser.json());

  app.use((req,res,next) => {

   let token = req.header
   ("Authorization");

   if (token != null) {
    token = token.replace("Bearer ","");
    console.log(token);
 
    jwt.verify(token, process.env.JWT_SECRET,
        (err, decoded) => {
            console.log(err);
            if(!err){
                req.user = decoded;
            }
         }); 
   }
   next()
 });


let mongoUrl = process.env.MONGO_URL;

mongoose.connect(mongoUrl);

const connection = mongoose.connection;

connection.once("open",()=>{
    console.log("MongoDB connection established successfuly");
}
);

app.use("/api/users",userRouter);
app.use("/api/products",productRouter);
app.use("/api/reviews", reviewRouter);
app.use("/api/inquiries", inquiryRouter);

app.listen(4000, ()=> {
    console.log("server is running on port 3000");

});


// "email": "hasitha1.doe@example.com",
//"password": "hashedpassword123",
//"role": "customer",


// "email": "hasitha2.doe@example.com",
//"password": "123hashedpassword123",
//"role": "admin",

//"email": "jane.smith@example.com",
//"password": "hashed_password_here",
//"role": "admin",

//"email": "1jane.smith@example.com",
//"password": "1hashed_password_here",
//"role": "custermer",

