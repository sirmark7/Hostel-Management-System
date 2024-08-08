import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { accountNavItems } from "../utils/data";
import SearchBar from "./SearchBar";
import {
  AiOutlineHeart,
  AiOutlineShop,
  AiOutlineUser,
  AiOutlineWallet,
} from "react-icons/ai";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { BsBag } from "react-icons/bs";



const RightNav= () => {
const path =useLocation()
  const [showMenu, setShowMenu] = useState(false);

  const logout = () => {
    // signOut();
  };

  const userId= false

  const navIcons: any[] = [
    <AiOutlineUser
      key={1}
      className="cursor-pointer font-normal text-[18px]"
    />,
  
    <AiOutlineHeart
      key={2}
      className="cursor-pointer  font-normal text-[18px]"
    />,
  ];
  const handleActive = () => {
    setShowMenu(false);
  };
  const handleActivenavToggle = () => {
    const allLinks = document.querySelectorAll(".nav-item");
    allLinks.forEach((element) => {
      element.classList.remove("active");
    });
    const targetElement: HTMLDivElement = event?.target as HTMLDivElement;
    targetElement.classList.add("active");
  };

  return (
    <>
      <div
        onClick={handleActivenavToggle}
        className="hidden md:flex right-nav nav-items items-center "
      >
        {/* <SearchBar styles="hidden md:flex" /> */}

        <div
          className="relative"
          onMouseOver={() => setShowMenu(true)}
          onMouseLeave={() => setShowMenu(false)}
        >
          {/* replace with react icons */}
          {/* <Image className='nav-item cursor-pointer ' src='/user.svg' alt='user profile' width={'48' height='48' onClick={()=>setShowMenu(!showMenu)} /> */}
          <AiOutlineUser className="nav-item cursor-pointer font-normal text-[48px] p-3" />
          <span
            className={`submenu bg-background-color text-sm right-0 p-5 flex flex-col items-center shadow-md shadow-gray-color justify-around gap-2 h-auto w-[200px] ${
              showMenu ? "absolute" : "hidden"
            }`}
          >
            {userId ? (
              <>
                {/* <AdminDashboardLink /> */}

                {accountNavItems.map((item, index) => (
                  <NavLink
                    onClick={handleActive}
                    key={index}
                    className={`hover:bg-[#CCCCCC] ${
                      path.pathname == "/account/" + item.path ? "bg-[#CCCCCC] " : ""
                    } flex justify-start text-left gap-4 items-center text-text-color w-full p-2 ${
                      item.mode
                    }`}
                    to={`/account/${item.path}`}
                  >
                    {navIcons[index]}
                    {item.path == "profile" ? "Account" : item.name}
                  </NavLink>
                ))}
                <button
                  onClick={logout}
                  className="hover:bg-[#CCCCCC] flex justify-start text-left gap-4 items-center text-text-color w-full p-2"
                >
                  <BiLogOut />
                  Sign out
                </button>
              </>
            ) : (
              <>
                <NavLink
                  className={`hover:bg-[#CCCCCC] flex justify-start text-left gap-4 items-center text-text-color w-full p-2`}
                  to={`/sign-in`}
                >
                  <BiLogIn />
                  Sign in
                </NavLink>
              </>
            )}
          </span>
        </div>
        <NavLink className="" to="/wishlist">
          <AiOutlineHeart className="nav-item cursor-pointer  font-normal text-[48px] p-3" />
          {/* <img className=' nav-item cursor-pointer ' src='/saved.svg' alt='wishlist' width='48' height='48'/> */}
        </NavLink>
       
      </div>
    </>
  );
};

export default RightNav;
