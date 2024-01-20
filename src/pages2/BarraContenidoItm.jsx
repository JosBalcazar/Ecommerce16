import { ItemCard } from "../components/ItemCard";
import { getProductCod } from "./../helpers/getProducCod";

export const BarraContenidoItm = ({
  carProductos,
  setCarProductos,
  countCarrito,
  setCountCarrito,
}) => {
  const items = getProductCod("1");

  return (
    <>
      {items.map((item) => (
        <ItemCard
          key={item.codf}
          item={item}
          carProductos={carProductos}
          setCarProductos={setCarProductos}
          countCarrito={countCarrito}
          setCountCarrito={setCountCarrito}
        />
      ))}
    </>
  );
};
