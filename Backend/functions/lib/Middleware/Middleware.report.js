"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateReport = void 0;
const report_schema_1 = require("../Schemas/report.schema");
const validateReport = (req, res, next) => {
    const result = report_schema_1.reportSchema.safeParse(req.body);
    if (!result.success) {
        return res.status(400).json({
            error: "Datos inválidos",
        });
    }
    req.body = result.data;
    next();
};
exports.validateReport = validateReport;
