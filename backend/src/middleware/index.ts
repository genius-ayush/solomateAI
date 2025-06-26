// import { Request , Response , NextFunction } from "express";
import jwt from 'jsonwebtoken' ; 
import { PrismaClient  } from '@prisma/client'
const prisma = new PrismaClient() ; 

export const authenticateToken = async(req :any, res:any  , next:any )=>{

    const authHeader = req.headers["authorization"] ; 
    const token = authHeader?.split(" ")[1] ;

    if(!token) return res.status(401).json({message:"Unauthorized"}) ; 

    try{
        const decoded = jwt.verify(token , process.env.JWT_SECRET!) as any ; 

        const user = await prisma.user.findUnique({where:{id:decoded.id}}) ; 

        if(!user)return res.status(401).json({message:"Invalid user"}) ; 
        req.user = user ;
        next() ; 

    }catch(err){
        return res.status(403).json({message:"Invalid or expired token"}) ; 
    }
}