import axios from "axios";

export const GetReports = async () => {
  try {
    const response = await axios.get("https://api-akayi7xlpa-uc.a.run.app/FieldOps/getReports");
    return response.data.data;
  } catch (err) {
    console.error("Error al traer los reportes:", err);
    throw err;
  }
};