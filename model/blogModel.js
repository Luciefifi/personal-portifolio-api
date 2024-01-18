import mongoose from "mongoose";
const blogSchema = mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    
       },
    title:{
        type:String,
        required:true
    },
    image:{
        type:[String],
        required:true
    },
    description:{
        type:String,
        required:true
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
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
const Blog = mongoose.model('Blog',blogSchema)
export default Blog;
