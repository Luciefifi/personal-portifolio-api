import userController from "../controller/userController.js";
import express, { Router } from 'express'

const userRoute = express.Router()
userRoute.post('/signup', userController.createUser);
userRoute.get('/user/:id', userController.getSingleUser);
userRoute.get('/users', userController.getAllUsers);
userRoute.delete('/deleteUser/:id', userController.deleteUser);
userRoute.put('/updateUser/:id', userController.updateUser)
export default userRoute