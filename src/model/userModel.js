import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    googleId: String,
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:"User"
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirmPassword:{
        type:String,
        required:true
    },
    lastPasswordChange: {
        type: Date,
        default: Date.now
      },
    createdAt:{
        type:Date,
        default:Date.now,
    },
    updatedAt:{
        type:Date,
        default:Date.now,
    }


})
const User = mongoose.model('User',userSchema)
export default User;
