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
const passport_1 = __importDefault(require("passport"));
const client_1 = require("@prisma/client");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
//@ts-ignore
// import { PrismaClient } from './generated/prisma'
const clientsecret = process.env.GOOGLE_CLIENT_SECRET;
const clientID = process.env.GOOGLE_CLIENT_ID;
const url = process.env.CALLBACK_URL;
const prisma = new client_1.PrismaClient();
passport_1.default.use(new GoogleStrategy({
    clientID: clientID,
    clientSecret: clientsecret,
    callbackURL: url
}, (_accessToken, _refreshToken, profile, done) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    console.log(clientID);
    try {
        const existingUser = yield prisma.user.findUnique({
            where: { googleId: profile.id },
        });
        if (existingUser)
            return done(null, existingUser);
        const newUser = yield prisma.user.create({
            data: {
                googleId: profile.id,
                email: ((_a = profile.emails) === null || _a === void 0 ? void 0 : _a[0].value) || '',
                name: profile.displayName,
            },
        });
        return done(null, newUser);
    }
    catch (err) {
        return done(err, null);
    }
})));
