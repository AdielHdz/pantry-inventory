function Td({ children, borderColor }) {
  return (
    <td
      className={` border text-center p-2
  ${borderColor ? borderColor : "border-black"}
  
  `}
    >
      {children}
    </td>
  );
}

export default Td;
