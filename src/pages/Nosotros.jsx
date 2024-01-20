import { BarraBusqueda } from "../pages2/BarraBusqueda"
import { BarraContacto } from "../pages2/BarraContacto"
import { BarraInformacion } from "../pages2/BarraInformacion"
import { BarraPiePagina } from "../pages2/BarraPiePagina"

import empresa from '/png/Empresa2.png'
import skf from '/png/skf.png'
import optibelt from '/png/optibelt.png'
import ntn from '/png/ntn.png'
import gates from '/png/gates.png'
import afa from '/png/afa.png'
import flexaust from '/png/flexaust.png'
import nadella from '/png/nadella.png'
import morse from '/png/morse.png'
import mcgill from '/png/mcgill.png'
import dongua from '/png/dongua.png'
import covalca from '/png/covalca.png'

export const Nosotros = () => {
  return (

    <>
        <div className="container-fluid cont">

                <BarraContacto/>
                <BarraBusqueda/>
                <BarraInformacion/>

                <div className="row pb-5 tit-content">
                    <h1>Nosotros</h1>
                </div>        

                {/*  BARRA DE CONTENIDO  */}
                <div className="row pt-2 ">
                    <div className="col-md-6 col-sm-12 d-flex flex-column p-5 det-content-nos">
                        <h3>¿Quiénes somos?</h3>
                        <h2>EMPRESA S.A.C.</h2>    
                        <span>En más de 30 años de existencia, hemos vivido cerca los problemas que aquejan a la industria peruana.</span>
                        <p>Somos una empresa peruana dedicada a la importación, distribución y comercialización de rodamientos, chumaceras, lubricantes y demás productos, para el sector Industrial y Automotriz en Lima y a nivel Nacional.
                        El alto nivel competitivo que se vive en la actualidad, obliga a las empresas a utilizar productos de calidad garantizada por las más estrictas certificaciones y la confianza de nuestros profesionales en la implementación de nuestros servicios para maquinarias de toda la industria.
                        </p>
                    </div>
                    <div className="col-md-6 col-sm-12 d-flex flex-column p-5">
                        <img src={empresa} alt=""></img>
                    </div>
                </div>

                <div className="row nos-mca">
                    <h2>Nuestras <span>marcas</span></h2>
                    <div>
                        <img src={skf} alt="skf"></img>
                        <img src={optibelt} alt="optibelt"></img>
                        <img src={ntn} alt="ntn"></img>
                        <img src={gates} alt="gates"></img>
                        <img src={afa} alt="afa"></img>
                        <img src={flexaust} alt="flexaust"></img>
                        <img src={nadella} alt="nadella"></img>
                        <img src={morse} alt="morse"></img>
                        <img src={mcgill} alt="mcgill"></img>
                        <img src={dongua} alt="dongua"></img>
                        <img src={covalca} alt="covalca"></img>
                    </div>
                </div>

                <BarraPiePagina/>

        </div>
    </>
    
  )
}

