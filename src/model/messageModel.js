import mongoose from "mongoose";
const messageSchema = mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    
       },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    telephone:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
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
const Message = mongoose.model('Message',messageSchema)
export default Message;
