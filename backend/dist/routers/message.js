"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// get all messages for a partner
router.get("messages/:partnerId", (req, res) => {
});
//send a message and get ai response
router.post("messages/:partnerId", (req, res) => {
});
exports.default = router;
