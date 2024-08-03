import React, { useState } from "react";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";
import HamburgerNav from "./HamburgerNav";
import SearchBar from "./SearchBar";
// import { useAuth } from "@clerk/nextjs";
// import { usePathname } from "next/navigation";
// import AdminNavbar from "../(admin_routes)/admin/components/AdminNavbar";
// import { useFilters } from "@/src/store/useFilters";

const NavBar = () => {
  const [showCart, setShowCart] = useState(false);
  // const { userId } = useAuth();
  // const pathname = usePathname();

  // const filters = useFilters((state) => state);

  // const adminNavbar = userId && pathname.includes("/admin");

  // return adminNavbar ? (
  //   <AdminNavbar />
  // ) : 
 return (
    <nav className="w-full max-w-[1512px] bg-[#F1F1F1] z-50 flex flex-1 items-start py-2 px-[1rem] lg:px-[5rem] fixed top-0 left-1/2 -translate-x-1/2 pt-[20px] justify-between gap-5 md:gap-0">
      <LeftNav />
      <RightNav />
      <SearchBar styles="md:hidden flex" />
      <HamburgerNav setShowCart={setShowCart} />
    </nav>
  );
};

export default NavBar;
