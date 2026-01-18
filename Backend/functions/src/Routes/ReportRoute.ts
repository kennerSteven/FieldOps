
import { Router } from "express";
import { createReport } from "../Controllers/ReportController";
import { GetReports } from "../Controllers/GetReportController";
import { validateReport } from "../Middleware/Middleware.report";
const router = Router();


router.post("/",validateReport, createReport);


router.get("/", GetReports,);

export default router;
