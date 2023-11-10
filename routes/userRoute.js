import userController from "../controller/userController.js";
import express, { Router } from 'express'

const userRoute = express.Router()
userRoute.post('/signup', userController.createUser)

export default userRoute