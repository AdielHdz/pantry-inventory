import Td from "./Td";

function TrProduct({
  name,
  brand,
  quantity,
  quantity_type,
  units,
  life,
  borderColor,
}) {
  return (
    <tr className="hover:bg-blue-50 cursor-default">
      <Td borderColor={borderColor}>{name}</Td>
      <Td borderColor={borderColor}>{brand}</Td>
      <Td borderColor={borderColor}>{quantity}</Td>
      <Td borderColor={borderColor}>{quantity_type}</Td>
      <Td borderColor={borderColor}>{units}</Td>
      <Td borderColor={borderColor}>{life}</Td>
    </tr>
  );
}

export default TrProduct;
