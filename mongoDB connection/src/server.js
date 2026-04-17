import express from "express";
import dotenv from "dotenv";
import connectDB from "./DB/connection.js";


dotenv.config();


const app = express()

app.use(express.json())

connectDB().then((conn)=>{
    console.log("mongoDB is connected DB HOST :", conn.connection.host);
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is running on : ${process.env.PORT}`)
    })
}).catch((err)=>{
    console.error("mongoDB connection is failed ")
    console.error(err.message)

    process.exit(1);
})





