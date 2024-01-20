import { Link } from 'react-router-dom'

import { BarraBusqueda } from "../pages2/BarraBusqueda"
import { BarraContacto } from "../pages2/BarraContacto"
import { BarraInformacion } from "../pages2/BarraInformacion"
import { BarraPiePagina } from "../pages2/BarraPiePagina"

export const Servicios = () => {
  return (

    <>
        <div className="container-fluid cont">

                <BarraContacto/>
                <BarraBusqueda/>
                <BarraInformacion/>

                <div className="row pb-5 tit-content">
                    <h1>Servicios</h1>
                </div>        

                {/*  BARRA DE CONTENIDO  */}
                <div className="row pt-5 det-content">
                  <div className="col-md-4 col-sm-6 d-flex flex-column p-5">
                      <img src="img/servicios/Analisis de vibraciones.png" alt=""></img>
                      <span>
                          <Link to="#">Analisis de vibraciones</Link>
                      </span>
                  </div>
                  <div className="col-md-4 col-sm-6 d-flex flex-column p-5">
                      <img src="img/servicios/Balance dinamico.png" alt=""></img>
                      <span>
                          <Link to="#">Balance dinamico</Link>
                      </span> 
                  </div>
                  <div className="col-md-4 col-sm-6 d-flex flex-column p-5">
                      <img src="img/servicios/Alineamiento laser.png" alt=""></img>
                      <span>
                          <Link to="#">Alineamiento laser</Link>
                      </span>
                  </div>

                  <div className="col-md-4 col-sm-6 d-flex flex-column p-5">
                      <img src="img/servicios/Extraccion.png" alt=""></img>
                      <span>
                          <Link to="#">Montaje y extraccion</Link>
                      </span>
                  </div>
                  <div className="col-md-4 col-sm-6 d-flex flex-column p-5">
                      <img src="img/servicios/Prueba hidrostatica.png" alt=""></img>
                      <span>
                          <Link to="#">Prueba hidrostatica</Link>
                      </span>
                  </div>            
                  <div className="col-md-4 col-sm-6 d-flex flex-column p-5">
                      <img src="img/servicios/Termografia.png" alt=""></img>
                      <span>
                          <Link to="#">Termografia infrarroja</Link>
                      </span>
                  </div>

                </div>

                <BarraPiePagina/>

        </div>
    </>
    
  )
}

