import express from 'express'
import blogController from '../controller/blogController.js'

const blogRoute = express.Router()

blogRoute.post('/create',blogController.createBlog)
blogRoute.get('/blogs',blogController.getAllBlogs)
blogRoute.get('/blog/:id',blogController.getSingleBlog)
export default blogRoute