import mongoose  from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
        trim:true,
        minLength:3,
        maxLength:50
    },
    age:{
        type:Number,
        required:true,
        min:0,
        max:120,
        default:18
    },
    email:{
        required:true,
        type: String,
        minLength:5,
        maxlength:60,
        match:/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm
        
    }
    
},{timestamps:true})   

export const User = mongoose.model("User", userSchema)
 



