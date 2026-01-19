"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KpiController = void 0;
const firebaseConfig_1 = require("../Config/firebaseConfig");
const KpiController = async (_req, res) => {
    try {
        const reportesRef = firebaseConfig_1.db.collection("reports");
        const snapshot = await reportesRef.get();
        const kpi = snapshot.docs.reduce((acc, doc) => {
            const priority = doc.data().Priority;
            acc.total++;
            if (priority === "alta")
                acc.alta++;
            else if (priority === "media")
                acc.media++;
            else if (priority === "baja")
                acc.baja++;
            return acc;
        }, { total: 0, alta: 0, media: 0, baja: 0 });
        return res.status(200).json(kpi);
    }
    catch (error) {
        console.error("Error contando reportes:", error);
    }
};
exports.KpiController = KpiController;
