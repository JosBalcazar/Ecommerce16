import { NavLink } from "react-router-dom";
import { useState } from "react";

// import { useContext } from "react";
// import { carritoContex} from "../contexto/CarritoContex"

export const CarritoCompras = ({
  carProductos,
  setCarProductos,
  isOpenCar,
  setIsOpenCar,
}) => {
  const [isDetCar, setIsDetCar] = useState(true);

  //Sacar total de compras
  const total = carProductos.reduce((suma, itm) => suma + itm.cant * itm.precio, 0).toFixed(2);

  //Copiar datos del carriro al contex
  // const  carrito  = useContext(carritoContex)

  return (
    <>
      <section className="menu" id="menu">
        <div className="compras">
          <span>Carrito de compras</span>
          <button onClick={() => setIsOpenCar(!isOpenCar)}>Cerrar</button>
        </div>

        <div className="compras-det">
          <div id="compras-detcom">
            {/*  CONTENIDO DEL DETALLE DE ITEMS DEL CARRITO */}

            {carProductos.map((item) => (
              <div className="compras-detcom" key={item.codi}>
                <img
                  id="com-img"
                  src={`/img/${item.imagen}`}
                  alt="Articulo seleccionado"
                ></img>
                <div>
                  <p id="com-cod">{item.codf}</p>
                  <div className="com-pre">
                    <p>{item.cant} x</p>
                    <span id="com-pre">{item.precio}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="compras-dettot">
            <div>
              <p>Subtotal</p>
              <span id="com-tot">{total}</span>
            </div>

            <NavLink to="/vercarrito">
              <button>Ver carrito</button>
            </NavLink>

            <button className="compras-dettot-fin">Finalizar compra</button>
          </div>
        </div>
      </section>
    </>
  );
};
