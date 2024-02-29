import Td from "./Td";
import TrProduct from "./Tr";
function Table({ distribution, arrData, arrTh, borderColor }) {
  if (distribution === "row") {
    return (
      <TableDesktop arrData={arrData} arrTh={arrTh} borderColor={borderColor} />
    );
  }

  if (distribution === "column") {
    return (
      <section className="grid gap-5">
        {arrData.map((item) => {
          return (
            <TableMobile
              key={item.id}
              name={item.name}
              brand={item.brand}
              quantity={item.quantity}
              quantity_type={item.quantity_type}
              units={item.units}
              life={item.life}
              arrTh={arrTh}
              borderColor={borderColor}
            />
          );
        })}
      </section>
    );
  }
}

export default Table;

function TableMobile({
  name,
  brand,
  quantity,
  quantity_type,
  units,
  life,
  arrTh,
  borderColor,
}) {
  return (
    <table
      className={`bg-bue-100 w-full border-collapse shadow-[2px_2px_10px_0_rgba(0,0,0,0.1)] ${
        borderColor ? borderColor : "border-black"
      }`}
    >
      <tbody>
        <tr className="">
          <th className={`border w-[200px] ${borderColor}`}>{arrTh[0]}</th>
          <Td borderColor={borderColor}>{name}</Td>
        </tr>
        <tr>
          <th className={`border ${borderColor}`}>{arrTh[1]}</th>
          <Td borderColor={borderColor}>{brand}</Td>
        </tr>
        <tr>
          <th className={`border ${borderColor}`}>{arrTh[2]}</th>
          <Td borderColor={borderColor}>{quantity}</Td>
        </tr>
        <tr>
          <th className={`border ${borderColor}`}>{arrTh[3]}</th>
          <Td borderColor={borderColor}>{quantity_type}</Td>
        </tr>
        <tr>
          <th className={`border ${borderColor}`}>{arrTh[4]}</th>
          <Td borderColor={borderColor}>{units}</Td>
        </tr>
        <tr>
          <th className={`border ${borderColor}`}>{arrTh[5]}</th>
          <Td borderColor={borderColor}>{life}</Td>
        </tr>
      </tbody>
    </table>
  );
}

function TableDesktop({ arrData, arrTh, borderColor }) {
  return (
    <table
      className={`bg-bue-100 w-full border-collapse shadow-[2px_2px_10px_0_rgba(0,0,0,0.1)]  border ${
        borderColor ? borderColor : "border-black"
      }`}
    >
      <thead className={`bg-gray-700 text-white w-full cursor-default `}>
        <tr>
          {arrTh.map((item, index) => (
            <th
              key={index}
              className={`border text-red py-2 ${
                borderColor ? borderColor : "border-black"
              }`}
            >
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {arrData.map((item) => (
          <TrProduct
            key={item.id}
            name={item.name}
            brand={item.brand}
            quantity={item.quantity}
            quantity_type={item.quantity_type}
            units={item.units}
            life={item.life}
            borderColor={borderColor}
          />
        ))}
      </tbody>
    </table>
  );
}
