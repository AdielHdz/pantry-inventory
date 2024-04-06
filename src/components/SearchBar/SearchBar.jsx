import { IoSearchOutline } from "react-icons/io5";
import SearchInput from "./SearchInput";
import SearchList from "../SearchList/SearchList";
import { LuPackageSearch } from "react-icons/lu";
import { useState } from "react";
function SearchBar({ data }) {
  const [searchInput, setSearchInput] = useState("");

  return (
    <section className="relative">
      <div className="relative">
        <SearchInput
          type="text"
          radius="rounded-[3px]"
          height="h-[46px]"
          placeholder="Leche, Cereal, Atun, Shampoo..."
          handlerChange={(e) => {
            setSearchInput(e.target.value);
            console.log(searchInput);
          }}
          value={searchInput}
        />
        <LuPackageSearch
          className={`absolute w-[34px] h-[34px] rounded transition duration-200 padding-[2px] top-1.5 right-1.5 bg-grayPurple text-white stroke-1
        ${searchInput ? "bg-secondary" : "bg-grayPurple"}
        `}
        />
      </div>
      <div className="mt-2">
        <SearchList list={data} />
      </div>
    </section>
  );
}

export default SearchBar;
