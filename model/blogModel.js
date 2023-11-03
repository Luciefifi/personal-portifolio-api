import mongoose from "mongoose";
const blogSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    description:{
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
const Blog = mongoose.model('Blog',blogSchema)
export default Blog;
