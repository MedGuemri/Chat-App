import express from "express"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import path from "path";

import { connectDB } from "./DB/connectDB.js"

import authRouter from "./routes/authRoutes.js"
import messagesRoutes from "./routes/messagesRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import { app, server } from "./socket/socket.js"




const PORT = process.env.PORT || 5000

const __dirname=path.resolve()
app.use(express.json())
app.use(cookieParser())
dotenv.config()


app.use("/api/auth",authRouter)
app.use("/api/messages",messagesRoutes)
app.use("/api/users",userRoutes)

app.use(express.static(path.join(__dirname,"/frontend/dist")))

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"))
})

server.listen(PORT, ()=>{
    connectDB()
    console.log(`server runing on ${PORT}`)
})