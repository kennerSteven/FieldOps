import { onRequest } from "firebase-functions/v2/https";
import express from "express";
import cors from "cors";
import FieldOpsRoutes from "./Routes/ReportRoute";


const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.use("/FieldOps", FieldOpsRoutes);

export const api = onRequest({ region: "us-central1" }, app);