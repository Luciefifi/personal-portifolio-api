import Blog from "../model/blogModel.js";

class blogController{
    static async createBlog(req,res){
       try{
        const blog = new Blog({
            title:req.body.title,
            image:req.body.image,
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
}

export default blogController;