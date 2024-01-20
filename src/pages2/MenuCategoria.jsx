import { Link  } from 'react-router-dom'
export const MenuCategoria = () => {

  const muestraCategoria = (categoria = '') => {

  }

  return (
    <>
        <div className="submenu">
            <ul>
                <li><Link to="#" onClick={muestraCategoria('RODAMIENTOS')}>Rodamientos</Link></li>
                <li><Link to="#" onClick={muestraCategoria('FAJAS')}>Fajas</Link></li>
                <li><Link to="#" onClick={muestraCategoria('CHUMACERAS')}>Chumaceras</Link></li>
                <li><Link to="#" onClick={muestraCategoria('RETEN')}>Retenes</Link></li>
                <li><Link to="#" onClick={muestraCategoria('MANGUERA')}>Mangueras</Link></li>
                <li><Link to="#" onClick={muestraCategoria('BUJES')}>Bujes</Link></li>
                <li><Link to="#" onClick={muestraCategoria('GRASA')}>Grasas</Link></li>
                <li><Link to="#" onClick={muestraCategoria('CADENAS')}>Cadenas</Link></li>
                <li><Link to="#" onClick={muestraCategoria('PIÑON')}>Piñones</Link></li>
                <li><Link to="#" onClick={muestraCategoria('LOCTITE')}>Loctite</Link></li>
                <li><Link to="#" onClick={muestraCategoria('POLEAS')}>Poleas</Link></li>
                <li><Link to="det_prod.html">Arandelas</Link></li>
            </ul>
        </div>
    </>

    )
}
