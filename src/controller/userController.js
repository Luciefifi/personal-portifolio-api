import User from "../model/userModel.js";
import userValidationSchema from "../validations/userValidation.js";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
import { sendEmail } from "../utils/sendEmail.js";
class userController {
  static async createUser(req, res) {
    try {
      //user validation

      const { error } = userValidationSchema.validate(req.body);

      if (error)
        return res.status(400).json({
          status: "fail",
          validationError: error.details[0].message,
        });

      const checkduplicatedEmail = await User.findOne({ email: req.body.email });
      if (checkduplicatedEmail) {
        return res.status(400).json({
          status: "fail",
          message: `User with ${req.body.email} already exist`,
        });
      }

      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const hashedConfirmPassword = await bcrypt.hash(
        req.body.confirmPassword,
        10
      );

      const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPassword,
        confirmPassword: hashedConfirmPassword,
      });
      await user.save();
      console.log("userter" , req.body.email)
      sendEmail({to:req.body.email, subject: "User registration" , html: `<div style="padding: 10px 0;">
      <h3> ${req.body.firstName} ${req.body.lastName} thank you for registering on our platform! </h3> 
      <h4> Click the button below to verify your email... </h4>
      
  </div>`})
      res.status(200).json({
        status: "success",
        message: "User created successfully",
        data: user,
      });
     
    } catch (error) {
      res.status(500).json({
        status: "Fail",
        message: error.message,
      });
      console.log(error);
    }
  }

  //login
  static async login(req, res) {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res.status(400).json({
          status: "fail",
          message: "Invalid email",
        });
      }

      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      console.log("password", req.body.password);
      console.log("user password", user.password);
      console.log("valid", validPassword);

      if (!validPassword) {
        return res.status(400).json({
          status: "fail",
          message: "Invalid  password",
        });
      }

      // create token


      
      const token = Jwt.sign({ user:{
        firstName:user.firstName,
        lastName:user.lastName,
        email:user.email,
        role:user.role,
        id:user._id
      } }, process.env.JWT_SECRET, {
        expiresIn: "2d",
      });

      res.status(200).json({
        status: "success",
        message: "User logged in successfully",
        // user: user,
        token: token,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        status: "fail",
        message: err.message,
      });
    }
  }

  static async getSingleUser(req, res) {
    try {
      const singleUser = await User.findById(req.params.id);
      res.status(201).json({
        status: "success",
        data: singleUser,
      });
    } catch (error) {
      res.status(404).json({
        status: "fail",
        message: error.message,
      });
    }
  }
  static async getAllUsers(req, res) {
    try {
      const allUsers = await User.find();
      if (allUsers.length === 0)
        res.status(404).json({
          message: "No user found",
        });
      res.status(200).json({
        status: "success",
        data: allUsers,
      });
    } catch (error) {
      res.status(404).json({
        status: "fail",
        message: error.message,
      });
    }
  }
  static async deleteUser(req, res) {
    try {
      const deletedUser = await User.findByIdAndDelete(req.params.id);
      if (!deletedUser) {
        res.status(404).json({
          status: "fail",
          message: "User not found",
        });
      }
      res.status(200).json({
        status: "success",
        message: "User deleted successfully !!!",
      });
    } catch (error) {
      res.status(500).json({
        status: "fail",
        message: error.message,
      });
    }
  }
  static async updateUser(req, res) {
    try {
      const existingUser = await User.findById(req.params.id);
      if (!existingUser) {
        res.status(404).json({
          status: "fail",
          message: "User not found",
        });
      }
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: req.body.password,
          confirmPassword: req.body.confirmPassword,
        },
        { new: true }
      );
      res.status(200).json({
        status: "success",
        message: "User updated successfully",
        data: updatedUser,
      });
    } catch (error) {
      res.status(500).json({
        status: "fail",
        message: "Something went wrong",
      });
    }
  }
}
export default userController;
