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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePartner = exports.updatePartner = exports.getPartnerById = exports.getPartners = exports.createPartner = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createPartner = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.user.id;
    const { name, gender, avatarUrl, personality } = req.body;
    const partner = yield prisma.partner.create({
        data: {
            userId,
            name,
            gender,
            avatarUrl,
            personality,
        },
    });
    res.json(partner);
});
exports.createPartner = createPartner;
const getPartners = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.user.id;
    const partners = yield prisma.partner.findMany({
        where: { userId },
    });
    res.json(partners);
});
exports.getPartners = getPartners;
const getPartnerById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const partner = yield prisma.partner.findUnique({ where: { id } });
    res.json(partner);
});
exports.getPartnerById = getPartnerById;
const updatePartner = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const data = req.body;
    // console.log(id) ; 
    // console.log(data) ; 
    const updated = yield prisma.partner.update({ where: { id }, data });
    res.json(updated);
});
exports.updatePartner = updatePartner;
const deletePartner = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    // console.log("id") ; 
    yield prisma.partner.delete({ where: { id } });
    res.sendStatus(204);
});
exports.deletePartner = deletePartner;
