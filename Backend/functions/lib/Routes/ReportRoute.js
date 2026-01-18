"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ReportController_1 = require("../Controllers/ReportController");
const router = (0, express_1.Router)();
router.post("/", ReportController_1.createReport);
exports.default = router;
