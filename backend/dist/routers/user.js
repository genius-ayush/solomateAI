"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// get current user (from jwt)
router.get('/c_user', (req, res) => {
});
// list all parenter of user
router.get("/c_user/partners", (req, res) => {
});
// get a specific partner of user
router.get("user/partner/:id", (req, res) => {
});
exports.default = router;
