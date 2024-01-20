import { NavLink } from 'react-router-dom'

import contacto from '/ico/arroba.svg'
import mail from '/ico/mail1.svg'
import phone from '/ico/phone1.svg'
import map from '/ico/map.svg'
import sitemap from '/ico/sitemap.svg'
import suscrip from '/ico/edit.svg'

export const BarraPiePagina = () => {
  return (
    <>
        <div className="row contenedor-pie">

            <div className="col-md-1"></div>

            <div className="col-md-3">
                <div className="contacto-tit pt-4 ">
                    <div className="d-flex flex-row">
                        <img src={contacto} alt="Contacto"></img>
                        <h4 className="ps-2 fw-bold">Ponte en contacto</h4>
                    </div>
                </div>
                
                <div className="contacto-det">
                    <div className="text-start pt-2 ps-2">
                        <img src={mail} alt="Email"></img>
                        <span className="ps-1">ventas@dominio.com</span>
                    </div>
                    <div className="text-start pt-2 ps-2">
                        <img src={phone} alt="Telefono"></img>
                        <span className="ps-1">(01) 111 1111</span>
                    </div>
                    <div className="text-start  pt-2 ps-2">
                        <img src={map} alt="Direccion"></img>
                        <span className="ps-1">Av. La Peruanidad 999</span>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="mapsite-tit pt-4">
                    <div className="d-flex flex-row">
                        <img src={sitemap} alt="Mapsite"></img>
                        <h4 className="ps-2 fw-bold">Mapsite</h4>
                    </div>
                </div>

                <div className="row pb-4">
                    <div className="col-6">
                        <ul className="list-unstyled text-start ps-5 mapsite-det">
                            <li className="pt-2">
                                <NavLink to="/nosotros">Nosotros</NavLink>
                            </li>
                            <li className="pt-2">
                                <NavLink to="/productos">Productos</NavLink>
                            </li>
                            <li className="pt-2">
                                <NavLink to="/servicios">Servicios</NavLink>
                            </li>
                            <li className="pt-2">
                                <NavLink to="/catalogos">Catalogo</NavLink>
                            </li>
                        </ul>    
                    </div>
                    <div className="col-6">
                        <ul className="list-unstyled text-start mapsite-det">
                            <li className="pt-2">
                                <NavLink to="#">Sucursales</NavLink>
                            </li>
                            <li className="pt-2">
                                <NavLink to="#">Distribuidores</NavLink>
                            </li>
                            <li className="pt-2">
                                <NavLink to="#">Noticias</NavLink>
                            </li>
                            <li className="pt-2">
                                <NavLink to="/contacto">Contacto</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="col-md-3">
                <div className="suscribete-tit pt-4">
                    <div className="d-flex flex-row">
                        <img src={suscrip} alt="Suscripcion"></img>
                        <h4 className="ps-2 fw-bold">Suscribete</h4>
                    </div>
                </div>

                <div className="pt-1 pb-4">
                    <p className="text-start ps-4">Suscribete a la pagina web para mantenerte siempre informado de lo nuevo y nuestras promociones
                    </p>
                    <div className="d-flex flex-column suscribete-ent">
                        <input type="text" placeholder="Ingresa tu e-mail"></input>
                        <div className="d-grid justify-content-end pt-2">
                            <button>Enviar</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-1"></div>

            </div>
    </>
  )
}
