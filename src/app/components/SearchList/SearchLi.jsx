function SearchLi({ id, product, brand, life, weight, typeWeight, amount }) {
  return (
    <li className="grid grid-cols-5 px-2 text-sm cursor-default hover:bg-teal-50 py-2 text-gray-400 hover:text-gray-600">
      <div>{product}</div>
      <div>{brand}</div>
      <div>{weight + typeWeight}</div>
      <div>{amount}</div>
      <div className=" text-rose-600 font-semibold">{life}</div>
    </li>
  );
}
export default SearchLi;
