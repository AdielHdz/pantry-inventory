import { TbPackages } from "react-icons/tb";
import { BsCalendarX } from "react-icons/bs";
import useWindowSize from "@/hooks/useWindowSize";
import { useEffect, useState } from "react";
function ProductCard({
  id,
  name,
  brand,
  quantity,
  quantity_type,
  units,
  life,
}) {
  const windowSize = useWindowSize();
  const [processed_title, setProcessedTitle] = useState("");

  useEffect(() => {
    console.log(windowSize);
    const full_title_product = `${name} ${brand} ${quantity + quantity_type}`;

    if (windowSize.width < 500) {
      setProcessedTitle(
        full_title_product.length < 25
          ? full_title_product
          : full_title_product.substring(0, 25) + "..."
      );
    } else if (windowSize.width >= 500 && windowSize.width < 800) {
      setProcessedTitle(
        full_title_product.length < 35
          ? full_title_product
          : full_title_product.substring(0, 35) + "..."
      );
    } else if (windowSize.width >= 800) {
      setProcessedTitle(
        full_title_product.length < 45
          ? full_title_product
          : full_title_product.substring(0, 45) + "..."
      );
    }
  }, [windowSize.width]);

  /*   */
  return (
    <article className="shadow-[0_0_10px_0_rgba(0,0,0,0.1)] transition duration-300 hover:scale-110 cursor-pointer bg-white w-full h-[100px] flex flex-col  rounded p-1 text-[12px] italic">
      <h5 className="flex-grow text-center  font-semibold">
        {processed_title}
      </h5>
      <h5 className="flex-grow flex items-center font-medium text-green-600 gap-2  ">
        <TbPackages className="w-4 h-4" /> {units}
      </h5>
      <h5 className="flex-grow flex items-center gap-2 font-medium text-red-800">
        <BsCalendarX className="w-4 h-4" />
        {life}
      </h5>
    </article>
  );
}

export default ProductCard;
