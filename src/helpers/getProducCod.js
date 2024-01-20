import { data } from "../productos/data/padron.js";

export const getProductCod = (codItem = "") => {
  codItem = codItem.toLocaleLowerCase().trim();

  if (codItem.length === 0) return [];

  const datos = data.filter((itm) => itm.estado != "1");

  return datos;
};
