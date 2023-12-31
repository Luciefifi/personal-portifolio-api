import User from "../model/userModel.js";
import userValidationSchema from "../validations/userValidation.js";
import bcrypt from 'bcrypt'
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

         const hashedPassword = await bcrypt.hash(req.body.password, 10);
         const hashedConfirmPassword = await bcrypt.hash(req.body.confirmPassword,10)
      const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPassword,
        confirmPassword: hashedConfirmPassword,
      });
      await user.save();
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
