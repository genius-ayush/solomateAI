import { Request , Response } from "express";
import { PrismaClient } from "@prisma/client";
import OpenAI from "openai";
const prisma = new PrismaClient() ;
const apiKey = process.env.OPENAI_API_KEY ; 

const openai = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: apiKey,
    defaultHeaders: {
    "HTTP-Referer": "<YOUR_SITE_URL>", // Optional. Site URL for rankings on openrouter.ai.
    "X-Title": "<YOUR_SITE_NAME>", // Optional. Site title for rankings on openrouter.ai.
  },
})

export const OpenAIService = {
    
    async generateMessage(role:string )
}


export const sendMessage = async(req:Request , res:Response)=>{
    
    const userId = (req as any).user.id ; 
    const {partnerId , content} = req.body ; 

    const userMessage = await prisma.message.create({
        data:{
            userId , 
            sender:"user" , 
            content ,
        }
    })

    const partner = await prisma.partner.findUnique({
        where:{id:partnerId} 
    })

    if(!partner)return res.status(404).json({error:"Partner not found"})

    const personality = typeof partner.personality == "object" ? JSON.stringify(partner.personality) : partner.personality; 

    const  systemPrompt = `you are ${partner.name} an AI partner with personality traits: ${personality}. Respond in a tone that is caring , emptionlly supportive, and matches those traits`

    const aiResponse = await 
}

export const getMessagesForPartner = async(req : Request , res:Response)=>{

}