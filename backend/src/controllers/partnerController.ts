import { Request , Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient() ; 

export const createPartner = async(req:Request , res:Response)=>{
    const userId = (req as any).user.id ;
    const {name , gender , avatarUrl , personality} = req.body ; 

    const partner = await prisma.partner.create({
        data:{
            userId , 
            name , 
            gender , 
            avatarUrl , 
            personality, 
        },
    })

    res.json(partner) ;

}

export const getPartners = async(req:Request , res:Response)=>{

    const userId = (req as any).user.id ; 
    const partners = await prisma.partner.findMany({
        where:{userId},
    }); 

    res.json(partners)
}

export const getPartnerById = async(req:Request , res:Response)=>{

    const {id} = req.params ;
    const partner = await prisma.partner.findUnique({where:{id}}); 
    res.json(partner) ; 
}

export const updatePartner = async(req:Request , res:Response)=>{

    const {id} = req.params ; 
    const data = req.body ; 
    // console.log(id) ; 
    // console.log(data) ; 
    const updated = await  prisma.partner.update({where:{id} , data}) ; 
    res.json(updated) ; 
}

export const deletePartner = async(req:Request , res:Response)=>{

    const {id} = req.params ;
    // console.log("id") ; 
    await prisma.partner.delete({where:{id}}) ; 
    res.sendStatus(204) ; 
}