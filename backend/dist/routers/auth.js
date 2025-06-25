"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
//Initiates Google login
router.get('/auth/google', () => {
});
//Handles callback + creates user + returns JWT
router.get("/auth/google/callback", (req, res) => {
});
//Clears session or token
router.post("/auth/logout", (req, res) => {
});
// return user info if jwt is valid
router.get("auth/me", (req, res) => {
});
exports.default = router;
