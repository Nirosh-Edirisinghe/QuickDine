import { Router } from "express";
import { getme, loginUser, registerUser } from "../controllers/authController.js";
import { protect } from "../middlewares/auth.js";

const authRouter = Router()

authRouter.post("/register", registerUser)
authRouter.post("/login", loginUser)
authRouter.get("/me", protect, getme)  

export default authRouter;
