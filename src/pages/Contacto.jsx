import { Link  } from 'react-router-dom'             
import { BarraBusqueda } from "../pages2/BarraBusqueda"
import { BarraContacto } from "../pages2/BarraContacto"
import { BarraInformacion } from "../pages2/BarraInformacion"
import { BarraPiePagina } from "../pages2/BarraPiePagina"

export const Contacto = () => {
  return (

    <>
        <div className="container-fluid cont">

                <BarraContacto/>
                <BarraBusqueda/>

                <BarraInformacion/>

                <div className="row pb-5 tit-content">
                    <h1>Contacto</h1>
                </div>        

                {/*  BARRA DE CONTENIDO  */}
                <div className="row pt-2 det-content">
                      <div className="col-md-6 col-sm-12 d-flex flex-column p-5 ">
                          <div>
                              <form action="" className="form-contac">
                                  <label for="nombre" className="frm-nom">Nombre</label>    
                                  <input type="text" name="introducir_nombre" id="nombre" required="obligatorio" placeholder="Nombre"></input>
                                  
                                  <label for="dni" className="frm-dni">RUC o DNI</label>    
                                  <input type="text" name="introducir_dni" id="rucdni" required="obligatorio" placeholder="RUC o DNI"></input>
          
                                  <label for="telefono" className="frm-tel">Teléfonos</label>    
                                  <input type="tel" name="introducir_tel" id="telefono" required="obligatorio" placeholder="Telefonos"></input>
                                  
                                  <label for="email" className="frm-mail">Email</label>    
                                  <input type="email" name="introducir_mail" id="mail" required="obligatorio" placeholder="Email"></input>

                                  <label for="mensaje" className="frm-msg">Mensaje</label>    
                                  <textarea name="introducir_mensaje" className="texto_mensaje" id="mensaje" required="obligatorio" placeholder="Mensaje"></textarea>                             
                                
                                  <button type="submit" name="enviar_formulario" id="enviar"><p>Enviar</p></button>
                              </form>
                          </div>
                      </div>

                      <div className="col-md-6 col-sm-12 d-flex flex-column p-5">
                          <img src="img/ubicacion/localizacion.png" alt=""></img>
                          <span>
                              <Link to="#">Ubicacion</Link>
                          </span> 
                      </div>

                </div>     

                <BarraPiePagina/>

        </div>
    </>
    
  )
}

