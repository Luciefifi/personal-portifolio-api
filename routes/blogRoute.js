import express from 'express'
import blogController from '../controller/blogController.js'

const blogRoute = express.Router()

blogRoute.post('/create',blogController.createBlog)
blogRoute.get('/blogs',blogController.getAllBlogs)
blogRoute.get('/blog/:id',blogController.getSingleBlog)
blogRoute.delete('/blog/:id',blogController.deleteBlog)
blogRoute.patch('/blog/:id',blogController.updateBlog)
export default blogRoute