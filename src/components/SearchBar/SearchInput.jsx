function SearchInput({ type, placeholder, height, width, radius, textColor }) {
  return (
    <input
      type={type}
      className={`
        px-2 
        border-gray-400 
        focus:border-rose-600 
        shadow-[inset_0_0_10px_0_rgba(0,0,0,0.3)]
        focus:bg-white
        w-full 
        h-9 
        border-2
        outline-none 
        rounded
        text-sm
        ${textColor ? textColor : "text-gray-700"}  
        ${width ? width : "w-full"} 
        ${radius ? radius : "rounded"} 
        ${height ? height : "h-full"} 
        `}
      placeholder={placeholder ? placeholder : ""}
    />
  );
}

export default SearchInput;
