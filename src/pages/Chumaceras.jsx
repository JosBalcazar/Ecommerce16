import { BarraBusqueda } from "../pages2/BarraBusqueda"
import { BarraContacto } from "../pages2/BarraContacto"
import { BarraInformacion } from "../pages2/BarraInformacion"
import { BarraPiePagina } from "../pages2/BarraPiePagina"

import arandela from '/png/prdArandela.png'
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


export const Chumaceras = () => {
  return (

    <>
        <div className="container-fluid cont">

                <BarraContacto/>
                <BarraBusqueda/>

                <BarraInformacion/>                

                <div className="row pb-5 tit-content">
                    <h1></h1>
                </div>        

                {/*  BARRA DE CONTENIDO  */}
                <div className="row pt-2 ">
                    <div className="col-md-6 col-sm-12 d-flex flex-column p-5 det-content-nos">
                        <h3>Arandelas</h3>
                        <p>
                            Una chumacera es un dispositivo que sirve para brindar soporte a un eje de rotación y va colocado paralelamente al eje del árbol. Esta parte diseñada para eficientar el rodamiento se utiliza en múltiples maquinarias de la industria.
                        </p>
                        <p><span>Tipo</span>Rodamientos</p>
                        <p><span>Material</span>
                            Puede encontrar los productos que necesita según las siguientes categorías: 
                        </p>
                        <p><span>Peso</span></p>
                        <p><span>Usos</span>
                            Una chumacera es un dispositivo que sirve para brindar soporte a un eje de rotación y va colocado paralelamente al eje del árbol. Esta parte diseñada para eficientar el rodamiento se utiliza en múltiples maquinarias de la industria.
                        </p>
                    </div>
                    <div className="col-md-6 col-sm-12 d-flex flex-column p-5">
                        <img src={arandela} alt=""></img>
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

