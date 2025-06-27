"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middleware_1 = require("../middleware");
const userController_1 = require("../controllers/userController");
const router = (0, express_1.Router)();
// get current user (from jwt)
router.get('/me', middleware_1.authenticateToken, userController_1.getCurrentuser);
exports.default = router;
