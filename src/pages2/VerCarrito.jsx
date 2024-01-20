import { BarraBusqueda } from "./BarraBusqueda"
import { BarraContacto } from "./BarraContacto"
import { BarraInformacion } from "./BarraInformacion"
import { BarraPiePagina } from "./BarraPiePagina"

export const VerCarrito = () => {
 
  return (
    <>
        <div className="row pt-4 pb-4 vcar-content">

            <BarraContacto/>
            <BarraBusqueda/>
            <BarraInformacion/>                
                
            <div className="row pb-5 tit-content">
                <h1>CARRO DE COMPRAS</h1>
            </div> 

            <div className="col-md-7 col-sm-12">
                <div className="row vcar-titulo">
                     <div className="col-sm-2">Imagen</div>
                     <div className="col-sm-2">Producto</div>
                     <div className="col-sm-2">Cantidad</div>
                     <div className="col-sm-2">Precio</div>
                     <div className="col-sm-2">SubTotal</div>
                     <div className="col-sm-2"></div>
                </div>

                <div id="det-car">
    
                </div>


                <div className="row vcar-actualiza">
                    <div className="col-sm-12">
                        <button>ACTUALIZAR CARRITO</button>
                    </div>
                </div>
            </div>

            <div className="col-md-5 col-sm-12 tcar-content">
                <div className="tcar-content-tit">
                    <h2>Resumen de compra</h2>
                    <div>
                        <p>Subtotal</p>
                        <span id="sub-compra">0.00</span>
                    </div>
                </div>
                <div className="tcar-content-env">
                    <p>Envio</p>
                    <div>
                        <span>Recojo en Tienda: Av. Peruanidad 999</span>
                        <span>Cercado de Lima</span>
                    </div>
                </div>
                <div className="tcar-content-fin">
                    <p>Total</p>
                    <span id="tot-compra">0.00</span>
                </div>
                <button>FINALIZAR COMPRA</button>
                
            </div>

        </div>

        <BarraPiePagina/>
    
    </>


  )
}
