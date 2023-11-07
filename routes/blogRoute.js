import express from 'express'
import blogController from '../controller/blogController.js'
// import multipleUpload from '../utils/multer.js'
import multipleUpload from '../utils/multer.js'

const blogRoute = express.Router()

blogRoute.post('/create',multipleUpload  ,blogController.createBlog)
blogRoute.get('/blogs',blogController.getAllBlogs)
blogRoute.get('/blog/:id',blogController.getSingleBlog)
blogRoute.delete('/blog/:id',blogController.deleteBlog)
blogRoute.patch('/blog/:id',blogController.updateBlog)
export default blogRoute