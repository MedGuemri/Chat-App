import express from "express"
import { getUsersForSideBar } from "../controllers/userControllers.js"
import protecteRoute from "../middellware/protectRoute.js"

const router=express.Router()

router.get("/",protecteRoute,getUsersForSideBar)


export default router