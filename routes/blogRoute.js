import express from 'express'
import blogController from '../controller/blogController.js'
// import multipleUpload from '../utils/multer.js'
import multipleUpload from '../utils/multer.js'
import verifyAdmin from '../middleware/verifyAdmin.js'
import verifyToken from '../middleware/authentication.js'

const blogRoute = express.Router();

blogRoute.post('/create',multipleUpload, verifyAdmin,blogController.createBlog)
blogRoute.get('/blogs',verifyToken, blogController.getAllBlogs)
blogRoute.get('/blog/:id',verifyAdmin,blogController.getSingleBlog)
blogRoute.delete('/blog/:id',blogController.deleteBlog)
blogRoute.patch('/blog/:id',multipleUpload , blogController.updateBlog)
export default blogRoute