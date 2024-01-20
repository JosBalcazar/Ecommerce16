import { Link,useParams  } from 'react-router-dom'
import { useMemo } from 'react'

import { BarraBusqueda, BarraContacto, BarraInformacion, BarraPiePagina } from '../pages2'
import { getCodItm} from '../helpers/getCodItm'


export const DetalleItem = () => {
  const { coditm } = useParams()
  
  const item = useMemo(() => getCodItm(coditm), [coditm])

  const itmImgUrl = `/img/${item[0].imagen}`
  
  const carritoItem = () => { }
  const decrease = () => { }
  const increase = () => {  }
  
  return (
    <>
        <div className="container-fluid cont">

                <BarraContacto/>
                <BarraBusqueda/>
                <BarraInformacion/>

                <div className="row pb-5 tit-content">
                    <h1>DESCRIPCION</h1>
                </div>        

                {/*  CONTENIDO  */}
                <div className="row pt-4 pb-4 det-content">
                    <div className="col-sm-1">
                        {/*  vacio  */}
                    </div>
                    <div className="col-sm-5 img-content" id="di-itm-img">
                        <img className="itm-imagen" src={itmImgUrl} alt="Producto"></img>
                    </div>
                    <div className="col-sm-5">
                        <div className="itm-detalle">
                            <p id="di-itm-nav">Inicio / RODAMIENTOS / {item[0].codf} - {item[0].marc}</p>
                            <h2 id="di-itm-cod">{item[0].codf}</h2>
                            <span id="di-itm-pre">{item[0].precio}</span>
                            <p id="di-itm-mca">{item[0].marc}</p>
                            <h5 className="pb-2" id="di-itm-stk" >{item[0].stoc} disponibles</h5>
                            <div className="row">
                                <div className="col-md-4 col-sm-12 itm-cant" >
                                    <button onClick={decrease} >-</button>
                                    <div id="di-itm-cant">
                                        <input id="di-itm-valor" type="number" value="1"/>
                                    </div>
                                    <button onClick={increase}>+</button>
                                </div>
                                <div className="col-md-8 col-sm-12">
                                    <button className="btn btn-primaryitm-carbtn" onClick={carritoItem}>AÑADIR AL CARRITO</button>
                                </div>
                            </div>
                            <div className="itm-lista" >
                                <Link to="#"><img src="/ico/shuffle.svg" alt=""></img>
                                    Compare
                                </Link>
                                <Link to="#"><img src="/ico/heart.svg" alt=""></img>
                                    Añadir a favoritos
                                </Link>
                            </div>
                            <div className="itm-datos">
                                <h5>SKU:</h5>
                                <p id="di-itm-cdi">{item[0].codi}</p>
                            </div>
                            <div className="itm-datos">
                                <h5>Categoria:</h5>
                                <p id="di-itm-fam">{item[0].familia}</p>
                            </div>
                            <div className="itm-datos">
                                <h5>Share:
                                    <img src="/ico/facebook2.svg" alt=""></img>
                                    <img src="/ico/twitter.svg" alt=""></img>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-1">
                        {/*  vacio  */}
                    </div>

                </div>           

                <BarraPiePagina/>

        </div>
    </>
  )
}
