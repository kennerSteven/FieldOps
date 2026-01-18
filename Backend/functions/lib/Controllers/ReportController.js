"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createReport = void 0;
const firebaseConfig_1 = require("../Config/firebaseConfig");
const createReport = async (req, res) => {
    try {
        const { Description, Priority, Localitation, img } = req.body;
        if (!Description ||
            !Priority ||
            !Localitation ||
            !Localitation.latitude ||
            !Localitation.longitude) {
            return res.status(400).json({ error: "Datos incompletos o incorrectos" });
        }
        const images = Array.isArray(img) ? img.map((i) => i.uri) : [];
        const newReport = {
            Description,
            Priority,
            Localitation,
            img: images.map((uri) => ({ uri })),
            createdAt: new Date(),
        };
        const docRef = await firebaseConfig_1.db.collection("reports").add(newReport);
        res.status(201).json({ id: docRef.id, ...newReport });
    }
    catch (error) {
        console.error("Error creando reporte:", error);
        res.status(500).json({ error: "Error al crear el reporte" });
    }
};
exports.createReport = createReport;
