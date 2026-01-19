import axios from "axios";

export const GetKpi = async () => {
  try {
    const response = await axios.get("https://api-akayi7xlpa-uc.a.run.app/FieldOps");
    return response.data;
  } catch (err) {
    console.error("Error al traer los Kpis:", err);
    throw err;
  }
};
