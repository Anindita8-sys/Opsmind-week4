import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"

import chatRoutes from "./routes/chatRoutes.js"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)

mongoose.connection.once("open", () => {
  console.log("MongoDB connected")
})

// routes
app.use("/api", chatRoutes)

app.get("/", (req,res)=>{
res.send("OpsMind AI Backend Running")
})

const PORT = process.env.PORT || 10000

app.listen(PORT,()=>{
console.log(`Server running on port ${PORT}`)
})