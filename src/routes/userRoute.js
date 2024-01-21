import userController from "../controller/userController.js";
import express, { Router } from 'express';
import verifyToken from "../middleware/authentication.js";
import verifyAdmin from "../middleware/verifyAdmin.js";

const userRoute = express.Router()
userRoute.post('/signup', userController.createUser);
userRoute.post('/login', userController.login);
userRoute.get('/user/:id', userController.getSingleUser);
userRoute.get('/users', verifyToken, userController.getAllUsers);
userRoute.delete('/deleteUser/:id', verifyToken, verifyAdmin, userController.deleteUser);
userRoute.put('/updateUser/:id', userController.updateUser)
export default userRoute