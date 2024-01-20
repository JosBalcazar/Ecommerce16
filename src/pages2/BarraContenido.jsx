import { BarraContenidoItm } from "./BarraContenidoItm";

export const BarraContenido = ({
  carProductos,
  setCarProductos,
  countCarrito,
  setCountCarrito,
}) => {
  return (
    <>
      <div className="row">
        <div className="col-md-3 cont-fil">
          <img
            className="cont-dsct"
            src="/img/dscto30.png"
            alt="Descuento1"
          ></img>
          <img
            className="cont-dsct"
            src="/img/dscto30.png"
            alt="Descuento2"
          ></img>
        </div>

        {/* Items  */}
        <div className="col-md-9">
          <div className="row cont-msg" id="cont-msg">
            Area de mansajes
          </div>

          <div className="row" id="cont-itm">
            <BarraContenidoItm
              carProductos={carProductos}
              setCarProductos={setCarProductos}
              countCarrito={countCarrito}
              setCountCarrito={setCountCarrito}
            />
          </div>
        </div>
      </div>
    </>
  );
};
