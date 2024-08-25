import jwt from "jsonwebtoken"
import UserModel from "../models/userModel.js"


 const protecteRoute = async (req,res,next) => {

    const token=req.cookies.token
    if (!token) {
        return  res.status(401).json({ error: "Unauthorized - No Token Provided" })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if (!decoded) {
            return res.status(401).json({ error: "Unauthorized - Invalid Token" });
        }

       const user = await UserModel.findById(decoded.userId).select("-password");

		if (!user) {
			return res.status(404).json({ error: "User not found" });
		}

		req.user = user;

        next()


    } catch (error) {
        console.log("Error in protectRoute middleware: ", error.message);
		return res.status(500).json({ error: "Internal server error" });
    }

}

export default protecteRoute