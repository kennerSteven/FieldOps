import { db } from "../Config/firebaseConfig";
import { Response, Request } from "express";

export async function GetReports(_req: Request, res: Response) {
  try {
    const querySnapshot = await db.collection("reports").get();

    if (querySnapshot.empty) {
 
    }

    const reports = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return res.status(200).json({
      state: "success",
      data: reports,
    });
  } catch (error) {
    console.error("Error al obtener reportes:", error);

  }
}