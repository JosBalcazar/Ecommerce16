import React, { Children, useState } from "react";
import { carritoContex } from "./CarritoContex";

export const StateCompo = ({ children }) => {
  const [carTotProd, setCarTotProd] = useState([]);

  return (
    <carritoContex.Provider value={(carTotProd, setCarTotProd)}>
      {children}
    </carritoContex.Provider>
  );
};
