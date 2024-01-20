import { NavLink } from "react-router-dom";
import { useState } from "react";
import { CarritoCompras } from "./CarritoCompras";

import logo from "/img/Rodamientos de bolas.png";
import menu from "/ico/menu.svg";
import cierre from "/ico/x.svg";
import busqueda from "/ico/lupa1.svg";
import sesion from "/ico/user2.svg";
import carrito from "/ico/cart1.svg";

export const BarraBusqueda = ({
  carProductos,
  setCarProductos,
  countCarrito,
  setCountCarrito,
}) => {
  const [isOpenCar, setIsOpenCar] = useState(false);

  const busquedaItems = () => {};

  const menuCategoria = () => {};

  const toogleSesion = () => {};

  return (
    <>
      <div className="row p-md-4 align-items-md-center barra-busqueda">
        <div className="col-md-1 logo">
          {/* <a href="index.html"><img src={logo} alt="Logo"></img></a> */}

          <NavLink to="/home">
            <img src={logo} alt="Logo"></img>
          </NavLink>

          <span>ROD</span>
        </div>

        <div className="col-md-2 open-submenu">
          <NavLink className="text-decoration-none" to="#">
            <img src={menu} alt="Categorias" onClick={menuCategoria()}></img>
            <span className="categoria">Categorias</span>
          </NavLink>
        </div>

        <div className="col-md-6">
          <div className="d-flex flex-row">
            <input
              id="bus-itm"
              className="rounded-pill busqueda"
              type="text"
            ></input>
            <NavLink href="#">
              <img src={cierre} alt="Cierre"></img>
            </NavLink>
            <NavLink href="#" id="btnBusca">
              <img src={busqueda} alt="Busqueda" onClick={busquedaItems}></img>
            </NavLink>
          </div>
        </div>

        <div className="col-md-2">
          <NavLink
            className="text-decoration-none"
            href="#"
            onClick={toogleSesion}
          >
            <img src={sesion} alt="Inicio sesion"></img>
            <span className="sesion">Inicia sesión</span>
          </NavLink>
        </div>

        {/* <div className="col-md-1" onClick={toogleCarrito}> */}

        <div className="col-md-1" onClick={() => setIsOpenCar(!isOpenCar)}>
          <NavLink href="#">
            <img src={carrito} alt="Carrito"></img>
          </NavLink>

          <div>
            {isOpenCar ? (
              <div>
                <CarritoCompras
                  carProductos={carProductos}
                  setCarProductos={setCarProductos}
                  isOpenCar={isOpenCar}
                  setIsOpenCar={setIsOpenCar}
                />
              </div>
            ) : null}
          </div>

          <span id="car-btn">{countCarrito}</span>
        </div>
      </div>
    </>
  );
};
