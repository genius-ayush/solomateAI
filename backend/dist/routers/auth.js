"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("../auth/google");
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const middleware_1 = require("../middleware");
const router = (0, express_1.Router)();
//Initiates Google login
router.get("/google", passport_1.default.authenticate("google", { scope: ["profile", "email"] }));
router.get("/google/callback", passport_1.default.authenticate("google", { session: false, failureRedirect: "/" }), (req, res) => {
    const user = req.user;
    console.log("token assign");
    const token = jsonwebtoken_1.default.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
    });
    console.log("reached");
    res.redirect(`${process.env.FRONTEND_URL}/auth/success?token=${token}`);
});
//Clears session or token
router.post("/logout", (req, res) => {
});
// return user info if jwt is valid
router.get("/me", middleware_1.authenticateToken, (req, res) => {
    res.json({ user: req.user });
});
exports.default = router;
