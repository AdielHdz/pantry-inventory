import { IoSearchOutline } from "react-icons/io5";
import SearchInput from "./SearchInput";
import SearchList from "../SearchList/SearchList";

function SearchBar({ data }) {
  return (
    <section className="relative">
      <SearchInput
        type="text"
        radius="rounded-[3px]"
        height="h-[46px]"
        placeholder="Leche, Cereal, Atun, Shampoo..."
      />
      {/*  <div className="bg-pink-700 absolute top-[3px] right-[3px] rounded-full  w-10 h-10 flex items-center justify-center cursor-pointer ">
        <IoSearchOutline className="text-white  w-8 h-8 " />
      </div> */}
      <div className="mt-2">
        <SearchList list={data} />
      </div>
    </section>
  );
}

export default SearchBar;
