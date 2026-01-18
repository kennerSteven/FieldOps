import { Request, Response } from "express";
import {db} from "../Config/firebaseConfig"
import type Report from "../types/Report.Types";

export const createReport = async (req: Request, res: Response) => {
  try {
    const { Description, Priority, Localitation, img } = req.body as Report;

    if (
      !Description ||
      !Priority ||
      !Localitation ||
      !Localitation.latitude ||
      !Localitation.longitude
    ) {
      return res.status(400).json({ error: "Datos incompletos o incorrectos" });
    }

    const images = Array.isArray(img) ? img.map((i) => i.uri) : [];

    const newReport: Report = {
      Description,
      Priority,
      Localitation,
      img: images.map((uri) => ({ uri })),
      createdAt: new Date(),
    };

    const docRef = await db.collection("reports").add(newReport);

    res.status(201).json({ id: docRef.id, ...newReport });
  } catch (error) {
    console.error("Error creando reporte:", error);
    res.status(500).json({ error: "Error al crear el reporte" });
  }
};
