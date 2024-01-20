
import Message from "../model/messageModel.js";

class messageController {
  static async createMessage(req, res) {
    try {
      
      const message = new Message({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        telephone: req.body.telephone,
        email: req.body.email,
        message: req.body.message,
      
      });
      await message.save();
      res.status(201).json({
        status: "success",
        message: "Message created successfully",
        data: message,
      });
    } catch (error) {
      res.status(500).json({
        status: "Fail",
        message: error.message,
      });
      console.log(error);
    }
  }

 
 
  static async getAllMessages(req, res) {
    try {
      const allMessages = await Message.find();
      if (allMessages.length === 0)
        res.status(404).json({
          message: "No message found",
        });
      res.status(200).json({
        status: "success",
        data: allMessages,
      });
    } catch (error) {
      res.status(404).json({
        status: "fail",
        message: error.message,
      });
    }
  }
  static async deleteMessage(req, res) {
    try {
      const deletedMessage = await Message.findByIdAndDelete(req.params.id);
      if (!deletedMessage) {
        res.status(404).json({
          status: "fail",
          message: "Message not found",
        });
      }
      res.status(200).json({
        status: "success",
        message: "Message deleted successfully !!!",
      });
    } catch (error) {
      res.status(500).json({
        status: "fail",
        message: error.message,
      });
    }
  }
 
}
export default messageController;
