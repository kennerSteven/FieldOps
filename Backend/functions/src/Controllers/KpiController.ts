import { db } from "../Config/firebaseConfig";
import { Response } from "express";

export const KpiController = async (_req: any, res: Response) => {
  try {
    const reportesRef = db.collection("reports");
    const snapshot = await reportesRef.get();


    const kpi = snapshot.docs.reduce(
      (acc, doc) => {
        const priority = doc.data().Priority;
        acc.total++;
        if (priority === "alta") acc.alta++;
        else if (priority === "media") acc.media++;
        else if (priority === "baja") acc.baja++;
        return acc;
      },
      { total: 0, alta: 0, media: 0, baja: 0 }
    );

    return res.status(200).json(kpi);
  } catch (error) {
    console.error("Error contando reportes:", error);

  }
};