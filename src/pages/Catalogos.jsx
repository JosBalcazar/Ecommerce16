import { Link  } from 'react-router-dom'
import { BarraBusqueda } from "../pages2/BarraBusqueda"
import { BarraContacto } from "../pages2/BarraContacto"
import { BarraInformacion } from "../pages2/BarraInformacion"
import { BarraPiePagina } from "../pages2/BarraPiePagina"

import skf from '/img/catalogos/skf2.png'
import ntn from '/img/catalogos/ntn2.png'
import rollway from '/img/catalogos/rollway2.png'
import sealmaster from '/img/catalogos/sealmaster2.png'
import nadella from '/img/catalogos/nadella2.png'
import mcgill from '/img/catalogos/mcgill2.png'
import jns from '/img/catalogos/jns2.png'
import ntnmontaje from '/img/catalogos/ntn_montaje2.png'

export const Catalogos = () => {
  return (

    <>
        <div className="container-fluid cont">

                <BarraContacto/>
                <BarraBusqueda/>
                <BarraInformacion/>

                <div className="row pb-5 tit-content">
                    <h1>Catalogos</h1>
                </div>        

                {/*  BARRA DE CONTENIDO  */}
                <div className="row pt-5 det-content">
                    <div className="col-md-3 col-sm-6 d-flex flex-column p-5">
                        <img src={skf} alt="catalogo skf"></img>
                        <span>
                            <Link to="#">SKF 2017</Link>
                        </span>
                    </div>
                    <div className="col-md-3 col-sm-6 d-flex flex-column p-5">
                        <img src={ntn} alt="catalogo ntn"></img>
                        <span>
                            <Link to="#">NTN 2016</Link>
                        </span> 
                    </div>
                    <div className="col-md-3 col-sm-6 d-flex flex-column p-5">
                        <img src={rollway} alt="catalogo rollway"></img>
                        <span>
                            <Link to="#">Rollway 2016</Link>
                        </span>
                    </div>
                    <div className="col-md-3 col-sm-6 d-flex flex-column p-5">
                        <img src={sealmaster} alt="catalogo sealmaster"></img>
                        <span>
                            <Link to="#">Seal Master 2016</Link>
                        </span>
                    </div>
                </div>

                <div className="row pt-5 pb-5 det-content">
                    <div className="col-md-3 col-sm-6 d-flex flex-column p-5">
                        <img src={nadella} alt="Catalogo nadella"></img>
                        <span><Link to="#">Nadella 2014</Link></span>
                    </div>
                    <div className="col-md-3 col-sm-6 d-flex flex-column p-5">
                        <img src={mcgill} alt="Catalogo mcgill"></img>
                        <span><Link to="#">McGill</Link></span>
                    </div>            
                    <div className="col-md-3 col-sm-6 d-flex flex-column p-5">
                        <img src={jns} alt="Catalogo jns"></img>
                        <span><Link to="#">JNS</Link></span>
                    </div>
                    <div className="col-md-3 col-sm-6 d-flex flex-column p-5">
                        <img src={ntnmontaje} alt="Catalogo ntn montaje"></img>
                        <span>
                            <Link to="#">Como montar un rodaje</Link>
                        </span>
                    </div>
                </div>                

                <BarraPiePagina/>

        </div>
    </>
    
  )
}

