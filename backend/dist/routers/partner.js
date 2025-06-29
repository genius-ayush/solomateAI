"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const partnerController_1 = require("../controllers/partnerController");
const middleware_1 = require("../middleware");
const router = (0, express_1.Router)();
router.use(middleware_1.authenticateToken);
router.post("/", partnerController_1.createPartner);
router.get("/", partnerController_1.getPartners);
router.get("/:id", partnerController_1.getPartnerById);
router.put("/:id", partnerController_1.updatePartner);
router.delete("/:id", partnerController_1.deletePartner);
exports.default = router;
