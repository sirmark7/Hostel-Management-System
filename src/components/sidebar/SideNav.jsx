import { useState } from "react";
import {NavLink} from "react-router-dom";
// import { accountNavItems } from "../utils/data";
import { useLocation } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";
import { PropTypes } from "prop-types";

const SideNav = ({ navItems, linkPreFix, icons }) => {
  const path = useLocation().pathname;


  const [hideNav, setHideNav] = useState(false);
  return (
    <>
      <div
        className={` p-2 bg-[#F1F1F1] rounded-tr-lg account-nav z-5 md:flex flex-col gap-4 transition-all items-start justify-start pt-10 relative
        min-h-[60vh]`}
      >
        <button
          className={`flex absolute  top-0 right-5 bg-gray-color rounded-full p-1 `}
          onClick={() => setHideNav((prev) => !prev)}
        >
          <AiOutlineLeft
            className={` transition ${hideNav ? "tranform rotate-180" : "tranform rotate-0"} font-bold`}
          />
        </button>
    
        {navItems.map(
          ( item, index  ) => {
            const currentPath =
              item.path.trim().length > 0
                ? linkPreFix + item.path
                : linkPreFix;

            const isCurrentPath = path === currentPath;
          
            

            return (
              <NavLink
                key={index}
                className={`${
                  isCurrentPath && "bg-[#CCCCCC]"
                } hover:bg-[#CCCCCC] flex justify-start items-center gap-1 w-full px-2 text-[14px] captalize`}
                to={`${linkPreFix}${item.path}`}
              >
                {icons[index]}
                { !hideNav&&item.name}
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
