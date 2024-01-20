import { Navigate, Routes, Route } from "react-router-dom";
import { Nosotros, Productos, Servicios, Catalogos, Contacto, DetalleItem,} from "../pages";
import { Home } from "../Home";
import { CarritoCompras } from "../pages2";
import { VerCarrito } from "../pages2/VerCarrito";

import { StateCompo} from "../contexto/StateCompo"


export const CarritoRoutes = () => {

  return (
    <>

      <StateCompo>

          <Routes>
            <Route path="home" element={<Home />} />
            <Route path="nosotros" element={<Nosotros />} />
            <Route path="productos" element={<Productos />} />
            <Route path="servicios" element={<Servicios />} />
            <Route path="catalogos" element={<Catalogos />} />
            <Route path="contacto" element={<Contacto />} />
            <Route path="detalleItem/:coditm" element={<DetalleItem />} />

            <Route path="carrito" element={<CarritoCompras />} />
            <Route path="vercarrito" element={<VerCarrito />} />

            <Route path="/*" element={<Navigate to="home" />} />
          </Routes>

      </StateCompo>

    </>
  );
};
