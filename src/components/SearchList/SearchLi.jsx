function SearchLi({ id, name, brand, life, quantity, quantity_type, units }) {
  return (
    <li className="grid grid-cols-5 px-2 text-sm cursor-default hover:bg-teal-50 py-2 text-gray-400 hover:text-gray-600">
      <div>{name}</div>
      <div>{brand}</div>
      <div>{quantity + quantity_type}</div>
      <div>{units}</div>
      <div className=" text-rose-600 font-semibold">{life}</div>
    </li>
  );
}
export default SearchLi;
