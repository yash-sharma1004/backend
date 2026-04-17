import mongoose from "mongoose"


let connectDB = async ()=>{
    let conn = await mongoose.connect(process.env.MONGODB_URI)
    return conn;
}

export  default connectDB;