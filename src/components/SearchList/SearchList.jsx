import SearchLi from "./SearchLi";

function SearchList({ list }) {
  return (
    <>
      {list.length ? (
        <ul className=" shadow-[2px_2px_10px_0_rgba(0,0,0,0.1)] rounded ">
          <li className="grid grid-cols-5 px-2 text-sm cursor-default  py-2 text-gray-400 ">
            <div>Producto</div>
            <div>Marca</div>
            <div>Medida</div>
            <div>Cantidad</div>
            <div>Fecha de caducidad</div>
          </li>
          {list.map((product) => (
            <SearchLi
              key={product.id}
              id={product.id}
              name={product.name}
              brand={product.brand}
              life={product.life}
              quantity_type={product.quantity_type}
              quantity={product.quantity}
              units={product.units}
            />
          ))}
        </ul>
      ) : (
        <></>
      )}
    </>
  );
}

export default SearchList;
