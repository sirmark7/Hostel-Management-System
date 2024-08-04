
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { mainNavItems, accountNavItems } from "../utils/data";

import { BiLogIn, BiLogOut } from "react-icons/bi";

const HamburgerNav = ({ setShowCart}) => {
  const [isActive, setIsActive] = useState(false);

const userId=false
  const handleIsActive = () => {
    setIsActive((prev) => !prev);
  };
  const toggleCart = () => {
    handleIsActive();
    setShowCart(true);
  };
   const logout = () => {
    // signOut();
    handleIsActive()
  };
  return (
    <div className="flex hamburger flex-col relative md:hidden">
      <div
        className={`hamburger-menu cursor-pointer relative h-[30px] w-[40px] flex flex-col justify-center transition-all duration-75 ease-in-out ${
          isActive ? "active" : ""
        }`}
        onClick={handleIsActive}
      >
        <span className="hamburger-bar "></span>
      </div>
      <div
        className={`absolute  ${
          isActive ? "top-10" : "-top-[120vh]"
        } pt-[40px] bg-opacity-95 -right-4 z-10 flex flex-col justify-start items-center bg-btn-bg  p-3 gap-5 transition-all w-[100vw] h-[100vh] duration-300 ease-in-out `}
      >
        {mainNavItems.map((link, i) => (
          <NavLink
            onClick={handleIsActive}
            className="uppercase text-2xl text-background-color hover:text-gray-color p-1"
            key={i}
            to={`${link.path}`}
          >
            {link.name}
          </NavLink>
        ))}

        { 
        userId ?(
        <>       
        {accountNavItems.map((link, i) => (
          <NavLink
            onClick={handleIsActive}
            className="uppercase text-2xl text-background-color p-1 hover:text-gray-color"
            key={i}
            to={`/account/${link.path}`}
          >
            {link.path === "profile" ? "account" : link.name}
          </NavLink>
          
        ))}

        <button  onClick={logout}
        className={`uppercase text-2xl text-background-color p-1 hover:text-gray-color`}>
        Sign out
        </button>
        </>
        )
         
        :
        <NavLink
        onClick={handleIsActive}
        className={`uppercase text-2xl text-background-color p-1 hover:text-gray-color`}
        to={`/sign-in`}
        >
        Sign in
        </NavLink>
        
}

        <NavLink
          onClick={toggleCart}
          className="uppercase text-2xl text-background-color p-1 hover:text-gray-color"
          to={"#"}
        >
          WISHLIST
        </NavLink>
      </div>
      {/* <span className={`overlay ${isActive?'active':''}` }></span> */}
    </div>
  );
};

export default HamburgerNav;
