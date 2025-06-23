import { Router } from "express";
const router = Router() ; 

// get current user (from jwt)
router.get('/c_user' , (req , res)=>{

})


// list all parenter of user
router.get("/c_user/partners" , (req , res)=>{

})

// get a specific partner of user
router.get("user/partner/:id" , (req , res)=> {

})

export default router ; 