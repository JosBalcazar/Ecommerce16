import { useState } from "react";
import { BarraBusqueda } from "./pages2/BarraBusqueda";
import { BarraContacto } from "./pages2/BarraContacto";
import { BarraContenido } from "./pages2/BarraContenido";
import { BarraInformacion } from "./pages2/BarraInformacion";
import { BarraPiePagina } from "./pages2/BarraPiePagina";
import { MenuCategoria } from "./pages2/MenuCategoria";

export const Home = () => {
  const [carProductos, setCarProductos] = useState([]);
  const [countCarrito, setCountCarrito] = useState(0);

  return (
    <>
      <div className="container-fluid cont">
        <BarraContacto />

        <BarraBusqueda
          carProductos={carProductos}
          setCarProductos={setCarProductos}
          countCarrito={countCarrito}
          setCountCarrito={setCountCarrito}
        />
        <MenuCategoria />

        <BarraInformacion />

        {/* <InicioSesion/> */}

        {/* <Slider/> */}

        <BarraContenido
          carProductos={carProductos}
          setCarProductos={setCarProductos}
          countCarrito={countCarrito}
          setCountCarrito={setCountCarrito}
        />

        <BarraPiePagina />
      </div>
    </>
  );
};
