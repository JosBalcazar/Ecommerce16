import { NavLink } from 'react-router-dom'

export const BarraInformacion = () => {
  return (
    <>
          <div className="row">
              <div className="col-md-12" >
                  <nav>
                      <ul className="cont-infor">
                              <li>
                                  {/* <Link to="/nosotros">Nosotros</Link> */}
                                  <NavLink
                                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                    to='/nosotros'
                                  >
                                  Nosotros
                                  </NavLink>
                              </li>

                              <li>
                                  {/* <Link to="/productos">Productos</Link> */}
                                  <NavLink
                                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                    to='/productos'
                                  >
                                  Productos
                                  </NavLink>
                              </li>

                              <li>
                                  {/* <Link Link="/servicios">Servicios</Link> */}
                                  <NavLink
                                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                    to='/servicios'
                                  >
                                  Servicios
                                  </NavLink>
                              </li>
                              <li>
                                  {/* <Link href="/catalogos">Catalogo</Link> */}
                                  <NavLink
                                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                    to='/catalogos'
                                  >
                                  Catalogos
                                  </NavLink>
                              </li>
                              <li>
                                  {/* <Link href="/contacto">Contacto</Link> */}
                                  <NavLink
                                    className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                                    to='/contacto'
                                  >
                                  Contacto
                                  </NavLink>
                              </li>
                      </ul>
                  </nav>
              </div>
          </div>
      </>
  )
}
