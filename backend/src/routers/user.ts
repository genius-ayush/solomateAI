import { Router } from "express";
import { authenticateToken } from "../middleware";
import { getCurrentuser } from "../controllers/userController";
const router = Router() ; 

// get current user (from jwt)
router.get('/me' ,authenticateToken, getCurrentuser)


export default router ; 