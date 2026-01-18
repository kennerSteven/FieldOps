"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetReports = GetReports;
const firebaseConfig_1 = require("../Config/firebaseConfig");
async function GetReports(_req, res) {
    try {
        const querySnapshot = await firebaseConfig_1.db.collection("reports").get();
        if (querySnapshot.empty) {
            return res.status(404).json({
                state: "empty",
                message: "No reports found",
                data: [],
            });
        }
        const reports = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return res.status(200).json({
            state: "success",
            data: reports,
        });
    }
    catch (error) {
        console.error("Error al obtener reportes:", error);
        return res.status(500).json({
            state: "error",
            message: "Internal server error",
        });
    }
}
