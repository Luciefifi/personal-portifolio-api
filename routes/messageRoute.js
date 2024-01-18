import express from 'express'
import messageController from '../controller/messageController.js'

const messageRoute = express.Router();

messageRoute.post('/message',messageController.createMessage)
messageRoute.get('/messages', messageController.getAllMessages)
messageRoute.delete('/message/:id',messageController.deleteMessage)

export default messageRoute