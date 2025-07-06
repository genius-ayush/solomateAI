import { Router } from "express";
import { authenticateToken } from "../middleware";
import{sendMessage , getMessagesForPartner} from "../controllers/messageController"
const router = Router() ; 

router.use(authenticateToken) ; 

// router.post("/" , sendMessage) ;

router.get("/:partnerId" , getMessagesForPartner) ; 

export default router ; 