function Input({
  type,
  height,
  width,
  radius,
  textColor,
  placeholder,
  handler,
  name,
  value,
}) {
  return (
    <input
      value={value}
      type={type}
      name={name}
      onChange={handler}
      className={`px-2 border-blue-50 focus:border-blue-400 w-full h-9 border-2 outline-none rounded 
      ${textColor ? textColor : "text-gray-700"}
      ${width ? width : "w-full"} 
      ${radius ? radius : "rounded"} 
      ${height ? height : "h-full"} 
      `}
      placeholder={placeholder ? placeholder : ""}
    />
  );
}

export default Input;
