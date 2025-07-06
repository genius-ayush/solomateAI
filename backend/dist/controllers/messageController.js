"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMessagesForPartner = exports.sendMessage = exports.OpenAIService = void 0;
const client_1 = require("@prisma/client");
const openai_1 = __importDefault(require("openai"));
const prisma = new client_1.PrismaClient();
const apiKey = process.env.OPENAI_API_KEY;
const openai = new openai_1.default({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: apiKey,
    defaultHeaders: {
        "HTTP-Referer": "<YOUR_SITE_URL>", // Optional. Site URL for rankings on openrouter.ai.
        "X-Title": "<YOUR_SITE_NAME>", // Optional. Site title for rankings on openrouter.ai.
    },
});
exports.OpenAIService = {
// async generateMessage(role:string )
};
const sendMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.user.id;
    const { partnerId, content } = req.body;
    const userMessage = yield prisma.message.create({
        data: {
            userId,
            sender: "user",
            content,
        }
    });
    const partner = yield prisma.partner.findUnique({
        where: { id: partnerId }
    });
    if (!partner)
        return res.status(404).json({ error: "Partner not found" });
    const personality = typeof partner.personality == "object" ? JSON.stringify(partner.personality) : partner.personality;
    const systemPrompt = `you are ${partner.name} an AI partner with personality traits: ${personality}. Respond in a tone that is caring , emptionlly supportive, and matches those traits`;
    // const aiResponse = await 
});
exports.sendMessage = sendMessage;
const getMessagesForPartner = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.getMessagesForPartner = getMessagesForPartner;
