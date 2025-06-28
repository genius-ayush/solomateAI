import { Request , Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient() ;

export const sendMessage = async(req:Request , res:Response)=>{
    
}

export const getMessagesForPartner = async(req : Request , res:Response)=>{

}