"use client";
import { useState } from "react";
import {NavLink} from "react-router-dom";
// import { accountNavItems } from "../utils/data";
import { useNavigate } from "react-router-dom";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { PropTypes } from "prop-types";

const SideNav = ({ navItems, linkPreFix, icons }) => {
  const path = useNavigate().pathName;

  const [hideNav, setHideNav] = useState(false);
  return (
    <>
      <button
        className={`${
          !hideNav ? "hidden" : "flex"
        }  bg-gray-color rounded-full p-1`}
        onClick={() => setHideNav((prev) => !prev)}
      >
        <AiOutlineRight className="font-bold" />
      </button>
      <div
        className={`account-nav z-5 md:flex flex-col gap-4 hidden border-[1px] pt-10 max-h[60vh] ${
          hideNav ? "absolute -left-[200px]" : "relative"
        } border-[#f1f1f1] min-h-[60vh]`}
      >
        <button
          className={`flex absolute  top-0 right-5 bg-gray-color rounded-full p-1 `}
          onClick={() => setHideNav((prev) => !prev)}
        >
          <AiOutlineLeft
            className={`${hideNav ? "hidden" : "flex"} font-bold`}
          />
        </button>

        {navItems.map(
          ( item, index  ) => {
            const currentPath =
              item.path.trim().length > 0
                ? linkPreFix + "/" + item.path
                : '';

            const isCurrentPath = path === currentPath;

            return (
              <NavLink
                key={index}
                className={`${
                  isCurrentPath && "bg-[#CCCCCC]"
                } hover:bg-[#CCCCCC] side-nav-item flex justify-start items-center gap-1 w-full px-2 text-[14px] captalize`}
                to={`${linkPreFix}/${item.path}`}
              >
                {icons[index]}
                {item.name}
              </NavLink>
            );
          }
        )}
      </div>
    </>
  );
};

SideNav.propTypes = {
  navItems:PropTypes.array,
  linkPreFix:PropTypes.string,
  icons :PropTypes.array
}
export default SideNav;
