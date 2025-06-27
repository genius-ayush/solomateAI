import '../auth/google'
import { Router } from "express";
import passport from "passport";
import jwt from "jsonwebtoken";
import { authenticateToken } from "../middleware";

const router = Router() ; 


//Initiates Google login
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));


//Handles callback + creates user + returns JWT
router.get("/google/callback" , passport.authenticate("google", { session: false, failureRedirect: "/" }) , (req , res)=>{
    const user = req.user as any ; 
    const token = jwt.sign({id: user.id} , process.env.JWT_SECRET!,{
        expiresIn:"7d" ,
    }); 
    console.log(token)
    console.log(user) ; 
    // res.status(201).json({
    //     token ,userId: user.id ,user: user , message : "user create successfully"
    // })
    res.redirect(`${process.env.FRONTEND_URL}/auth/success?token=${token}`);
})


//Clears session or token
router.post("/logout" , (req , res)=>{

})

// return user info if jwt is valid
router.get("/me" , authenticateToken , (req , res)=>{
    res.json({user:req.user}) ; 
})


export default router ; 