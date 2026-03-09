import express from "express"
import Chat from "../models/chat.js"

const router = express.Router()

router.post("/chat", async (req,res)=>{

const {question,answer} = req.body

const newChat = await Chat.create({
question,
answer
})

res.json(newChat)

})

router.get("/history", async(req,res)=>{

const chats = await Chat.find().sort({time:-1})

res.json(chats)

})

export default router