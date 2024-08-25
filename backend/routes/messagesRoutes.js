import express from "express"
import {sendMessage,getMessage} from "../controllers/messagesControllers.js"
import protecteRoute from "../middellware/protectRoute.js"



const router=express.Router()

router.get("/:id",protecteRoute,getMessage)
router.post("/send/:id",protecteRoute,sendMessage)

export default router