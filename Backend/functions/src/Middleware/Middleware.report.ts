import { Request, Response, NextFunction } from "express";
import { reportSchema } from "../Schemas/report.schema";

export const validateReport = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = reportSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      error: "Datos inválidos",
    
    });
  }

  req.body = result.data; 
  next();
};
