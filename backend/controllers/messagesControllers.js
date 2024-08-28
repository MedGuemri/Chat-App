import ConverstaionModel from "../models/conversationModel.js"
import MessageModel from "../models/messageModel.js"
import { getReciverSocketId,io } from "../socket/socket.js"



export const sendMessage = async (req, res) => {
    try {

        const { message } = req.body
        const { id: reciverId } = req.params
        const senderId = req.user._id

        let conversation = await ConverstaionModel.findOne({
            participents: { $all: [senderId, reciverId] }
        })

        if (!conversation) {
            conversation = await ConverstaionModel.create({
                participents: [senderId, reciverId]
            })
        }

        const newMessage = new MessageModel({
            senderId,
            reciverId,
            message
        })

        if (newMessage) {
            conversation.messages.push(newMessage._id)
        }


        await Promise.all([conversation.save(), newMessage.save()])

        const reciverSocketId= getReciverSocketId(reciverId)
        if (reciverSocketId){
            io.to(reciverSocketId).emit("newMessage",newMessage)
        }



        res.status(201).json(newMessage)






    } catch (error) {
        console.log("error in send message contoller ", error.message)
        return res.status(500).json({ error: "internal server error" })
    }
}

export const getMessage = async (req, res) => {
    try {
        const { id: userToChtId } = req.params
        const senderId = req.user._id

        const conversation = await ConverstaionModel.findOne({
            participents: { $all: [senderId, userToChtId] }
        }).populate("messages")

        if (!conversation) return res.status(200).json([])

        const messages = conversation.messages

        res.status(200).json(messages)



    } catch (error) {
        console.log("error in get message contoller ", error.message)
        return res.status(500).json({ error: "internal server error" })
    }
}