import { data } from "../productos/data/padron.js";

export const getCodItm = (codItem = "") => {
  codItem = codItem.toLocaleLowerCase().trim();

  if (codItem.length === 0) return [];

  const datos = data.filter((itm) => itm.codi === codItem);

  return datos;
};
