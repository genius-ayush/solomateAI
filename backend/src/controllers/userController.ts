import { Request , Response } from "express";
import { PrismaClient  } from '@prisma/client'
const prisma = new PrismaClient() ; 

export const getCurrentuser = async(req: Request , res:Response)=>{

    const userId = (req as any).user.id; 
    // console.log(req.user) ; 
    const user = await prisma.user.findUnique({
        where:{id : userId} , 
        select:{ id:true , email:true , name:true} , 
    }) ; 

    res.json(user) ; 
}