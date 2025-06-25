"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// iniitate stript payment session
router.post("/subscribe", (req, res) => {
});
// handle subscription updates
router.post("webhooks/stripe", (req, res) => {
});
exports.default = router;
