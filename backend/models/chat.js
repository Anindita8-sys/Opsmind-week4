import mongoose from "mongoose"

const ChatSchema = new mongoose.Schema({
  question: String,
  answer: String,
  time: {
    type: Date,
    default: Date.now
  }
})

export default mongoose.model("Chat", ChatSchema)