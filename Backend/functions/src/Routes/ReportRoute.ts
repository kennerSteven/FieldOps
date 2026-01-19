
import { Router } from "express";
import { createReport } from "../Controllers/ReportController";
import { GetReports } from "../Controllers/GetReportController";
import { validateReport } from "../Middleware/Middleware.report";
import { KpiController } from "../Controllers/KpiController";
const router = Router();


router.post("/",validateReport, createReport);
router.get("/", KpiController,);

router.get("/getReports", GetReports,);

export default router;
