import { Router } from "express";
import { createReport } from "../Controllers/ReportController";

const router = Router();

router.post("/", createReport);

export default router;
