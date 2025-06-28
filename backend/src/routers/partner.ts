import { Router } from "express";
import{
    createPartner , 
    getPartners , 
    getPartnerById , 
    updatePartner , 
    deletePartner,
} from "../controllers/partnerController"
import { authenticateToken } from "../middleware";

const router = Router() ; 

router.use(authenticateToken) ; 

router.post("/" , createPartner) ;
router.get("/" , getPartners) ; 
router.get("/:id" , getPartnerById) ; 
router.put("/:id" , updatePartner) ; 
router.delete("/:id" , deletePartner) ; 

export default router ; 