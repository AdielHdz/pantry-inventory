function Button({
  children,
  color,
  textColor,
  width,
  radius,
  type,
  handler,
  paddingBlock,
}) {
  return (
    <button
      onClick={handler}
      type={type}
      className={`
    
    py-1 
    rounded
    w-full
    ${color}
    ${textColor ? textColor : "text-gray-700"}
    ${width ? width : "w-full"}
    ${radius ? radius : "rounded"}
    ${paddingBlock ? paddingBlock : "py-2"}
    `}
    >
      {children}
    </button>
  );
}

export default Button;
