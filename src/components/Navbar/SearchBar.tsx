"use client";
import React, { useState } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import useFilters from "../store/useFilters";


const SearchBar = ({ styles }: { styles: string }) => {
  const [search, setSearch] = useState("");
  const { addSearchQuery } = useFilters();
  const path =useLocation().pathname
  const redirect=useNavigate()

  const searchShop = (e) => {
    e.preventDefault();
    if(path!=="/hostels"){
      redirect("/hostels");
    }
    addSearchQuery(search);
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
        className=" p-1 border-none outline-none w-full bg-background-color"
      />
    </form>
  );
};

export default SearchBar;
