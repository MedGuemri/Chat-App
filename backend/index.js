import express from "express"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import cors from "cors"

import { connectDB } from "./DB/connectDB.js"

import authRouter from "./routes/authRoutes.js"
import messagesRoutes from "./routes/messagesRoutes.js"
import userRoutes from "./routes/userRoutes.js"



const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cookieParser())
dotenv.config()
app.use(cors({
    origin: "http://localhost:5173",
    credentials : true
}))

app.use("/api/auth",authRouter)
app.use("/api/messages",messagesRoutes)
app.use("/api/users",userRoutes)

app.listen(PORT, ()=>{
    connectDB()
    console.log(`server runing on ${PORT}`)
})