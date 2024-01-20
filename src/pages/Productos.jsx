import { Link } from 'react-router-dom'             

import { BarraBusqueda } from "../pages2/BarraBusqueda"
import { BarraContacto } from "../pages2/BarraContacto"
import { BarraInformacion } from "../pages2/BarraInformacion"
import { BarraPiePagina } from "../pages2/BarraPiePagina"

import rodamientos from '/png/Rodamientos.png'
import chumacera from '/png/Chumacera.png'
import fajaspoleas from '/png/FajasPoleas.png'
import mangueras from '/png/Mangueras.png'
import retenes from '/png/Retenes.png'
import cadenaacoples from '/png/CadenasAcoples.png'
import herramientaseqp from '/png/HerramientasEquipos.png'
import lubricacion from '/png/Lubricacion.png'

export const Productos = () => {
  return (

    <>
        <div className="container-fluid cont">

                <BarraContacto/>
                <BarraBusqueda/>
                <BarraInformacion/>

                <div className="row pb-5 tit-content">
                    <h1>Productos</h1>
                </div>        

                {/*  BARRA DE CONTENIDO  */}
                <div className="row pt-5 det-content">
                    <div className="col-md-3 col-sm-6 d-flex flex-column p-5">
                        <img src={rodamientos} alt="Rodamientos"></img>
                        <span>
                            <Link to="#">Rodamientos</Link>
                        </span>
                    </div>
                    <div className="col-md-3 col-sm-6 d-flex flex-column p-5">
                        <img src={chumacera} alt="Chumaceras"></img>
                        <span>
                            <Link to="/chumaceras">Chumaceras</Link>
                        </span> 
                    </div>
                    <div className="col-md-3 col-sm-6 d-flex flex-column p-5">
                        <img src={fajaspoleas} alt="Fajas Poleas"></img>
                        <span>
                            <Link to="#">Fajas y poleas</Link>
                        </span>
                    </div>
                    <div className="col-md-3 col-sm-6 d-flex flex-column p-5">
                        <img src={mangueras} alt="Mangueras"></img>
                        <span>
                            <Link to="#">Mangueras</Link>
                        </span>
                    </div>
                </div>

                <div className="row pt-5 pb-5 det-content">
                    <div className="col-md-3 col-sm-6 d-flex flex-column p-5">
                        <img src={retenes} alt="Retenes"></img>
                        <span>
                            <Link to="#">Retenes</Link>
                        </span>
                    </div>
                    <div className="col-md-3 col-sm-6 d-flex flex-column p-5">
                        <img src={cadenaacoples} alt="Cadena Acoples"></img>
                        <span>
                            <Link to="#">Cadenas y acoples</Link>
                        </span>
                    </div>            
                    <div className="col-md-3 col-sm-6 d-flex flex-column p-5">
                        <img src={herramientaseqp} alt="Herramientas Equipos"></img>
                        <span>
                            <Link to="#">Herramientas y equipos</Link>
                        </span>
                    </div>
                    <div className="col-md-3 col-sm-6 d-flex flex-column p-5">
                        <img src={lubricacion} alt="Lubricantes"></img>
                        <span>
                            <Link to="#">Lubricantes</Link>
                        </span>
                    </div>
                </div>             

                <BarraPiePagina/>

        </div>
    </>
    
  )
}

