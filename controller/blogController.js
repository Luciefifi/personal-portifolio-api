import Blog from "../model/blogModel.js";
import cloudinary from "../utils/cloudinary.js";
import upload from "../utils/multer.js";

class blogController{
    static async createBlog(req,res){
       try{
        //upload image to the cloudinary
        const uploadImages = await Promise.all(
            req.files.map(async(file)=>{
        const images = await cloudinary.uploader.upload(file.path)
        return images.secure_url


            })
        )
        console.log("your image is", uploadImages)
        const blog = new Blog({
            title:req.body.title,
            image:uploadImages,
            description:req.body.description,
        });
        await blog.save();
        console.log('blog created successfullly')

        res.status(201).json({
            'status':"success",
            'message':'blog created successfully',
            'data':blog
        })
       }catch(error){
        res.status(500).json({
            'status':'fail',
            'error':error
        })
        console.log(error.message)

       }

    }
    static async getAllBlogs(req,res){
        try{
            const allBlogs = await Blog.find();
            // console.log(allBlogs)
            res.status(200).json({
                "status":"success",
                "data":allBlogs
            })


        }catch(error){
            console.log(error.message)
            res.status(404).json({
                "status":"fail",
                "message":error
            })

        }
    }
    static async getSingleBlog (req,res){
        try{
            const singleBlog = await Blog.findById(req.params.id)
            res.status(200).json({
                "status":"success",
                "data":singleBlog
            })

        } catch(error){
            console.log(error.message)
            res.status(404).json({
                "status":"fail",
                "error":error
            })

        }
    }
    //deleting a blog
    static async deleteBlog(req , res){
        try{
            const deletedBlog =  await Blog.findByIdAndDelete(req.params.id)
            res.status(200).json({
                status:"success",
                "message":"Blog deleted successfully"
            })

        }catch(error){
            res.status(500).json({
                status:"fail",
                error:error.message
            })

        }
    }

    //updating a blog
   static async updateBlog(req,res){
    try{
        const updatedBlog = await Blog.findByIdAndUpdate(req.params.id,{$set:{
            title:req.body.title,
            image:req.body.image,
            description:req.body.description
        }},{new:true});
        res.status(200).json({
            status:"success",
            message:"message updated successfully",
            data:updatedBlog
        })

    }catch(error){
        res.status(500).json({
            status:'fail',
            error:error.message
        })

    }
   }

}

export default blogController;