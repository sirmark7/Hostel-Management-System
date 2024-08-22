
import React from "react";

import { NavLink } from "react-router-dom";
import { mainNavItems } from "../utils/data";

const SideNavBar = ({dashboard}) => {
  let path = dashboard?"#":"/"

  return (
    <div className="left-nav nav-items flex lg:text-base">
      <NavLink to={path}>
        <img src="/logo.svg" alt="logo" height="40" width="48" />
      </NavLink>
      {!dashboard&&mainNavItems.map((navItem, index) => (
        <NavLink
          className={`nav-item p-1  md:flex md:text-[12px] hidden`}
          key={index}
          to={navItem.path}
        >
          {navItem.name}
        </NavLink>
      ))}
    </div>
  );
};

export default SideNavBar;
