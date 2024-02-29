function ProductCard({
  id,
  name,
  brand,
  quantity,
  quantity_type,
  units,
  life,
}) {
  return (
    <div
      onClick={async () => {
        const productDeleted = await deleteProduct(id);
        if (productDeleted.name) {
          const productsUpdated = await getProducts();
          setProducts(productsUpdated);
        }
      }}
      className="shadow-[2px_2px_10px_0_rgba(0,0,0,0.1)]  rounded p-3 min-w-[150px] grid   "
    >
      <h3 className="">
        {`${name} ${brand}
          ${quantity + quantity_type}`}
      </h3>
      <h3 className="w-max">Cantidad: {units}</h3>
      <h3 className="text-red-700 font-semibold">Fecha de caducidad{life}</h3>
    </div>
  );
}

export default ProductCard;
