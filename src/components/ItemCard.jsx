import { NavLink } from "react-router-dom"

export const ItemCard = ({item,  carProductos,setCarProductos,  countCarrito,setCountCarrito, }) => {
  const itmImgUrl = `/img/${item.imagen}`

  item.cant = 1

  const carritoItem = () => {

          //Busca si el producto ya esta agregado al carrito
          if (carProductos.find(itm => itm.codi === item.codi)) {
                // Si esta ubica el producto para sumar la cantitad
              const products = carProductos.map(itm =>
                  itm.codi === item.codi
                  ? { ...itm, cant: itm.cant + item.cant }
                  : itm
              );
    
              setCountCarrito(countCarrito+1);
              setCarProductos([...products]);

              console.log(carProductos)

              return 
            }

    // Conteo de productos añadidos al carrito
    setCountCarrito(countCarrito+1);

    // Agregar a lista de carrito
    setCarProductos( [...carProductos,item] )
    console.log(carProductos)
  }


  return (
    <div className="col-md-4 col-sm-6">
        <div className="itm-det p-4">
            {/* <NavLink to="/detalleItem/:item.codi"> */}
            <NavLink to={`/detalleItem/${item.codi}`}>
                <img className="imagen" id="itm-img"  src={itmImgUrl} alt="articulo"></img>
                <h6>
                    <p id="itm-cod">{item.codf}</p>
                </h6>
                <div>
                    <p id="itm-fam">{item.familia}</p>
                </div>
                <span className="precio" id="itm-pre">{item.precio}</span>
            </NavLink>                                
            <div>
                <input className="rounded-pill carrito" type="button" onClick={() => carritoItem()}
                       value="Agregar al carrito" >
                </input>
            </div>
        </div>
    </div>
  )
}


