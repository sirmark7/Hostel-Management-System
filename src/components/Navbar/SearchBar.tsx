"use client";
import React, { useState } from "react";
import { redirect } from "react-router-dom";


const SearchBar = ({ styles }: { styles: string }) => {
  const [search, setSearch] = useState("");
  // const { setSearchFilter } = useFilters((state) => state);

  const searchShop = async (e) => {
    e.preventDefault();
    // setSearchFilter(search);
    redirect("/shop");
  };

  return (
    <form
      onSubmit={searchShop}
      className={`border-[1px] border-[#7F7F7F] bg-background-color ${styles} flex-1 hover: border[2px] rounded-[12px] px-2`}
    >
      <button
        type="submit"
        className="flex items-center justify-center bg-transparent"
      >
        <img src="/search.svg" alt="search" height="12" width="14" />
      </button>
      <input
        type="search"
        name="search"
        id=""
        placeholder="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className=" p-1 border-none outline-none "
      />
    </form>
  );
};

export default SearchBar;
