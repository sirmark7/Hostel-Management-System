
import {Link,useLocation} from "react-router-dom";
import React from "react";
import Button from "../Button";

const DashboardNavbar = ({navitems,heading}) => {
   const pathname =useLocation().pathname; 

  return (
    <nav className="flex items-center justify-between">
      <ul className="flex flex-grow gap-3 items-center">
        <li className="mr-2">
          <Link to={"/user"} className="flex items-center gap-2">
            <img src="/logo.svg" alt="logo" height="40" width="48" />
            <span className="font-semibold text-2xl">{heading}</span>
          </Link>
        </li>
        <li>
          <Link
            to={"/user"}
            className={`transition-all flex items-center justify-center ${
              pathname === "/user" ? "font-bold" : "font-medium"
            } hover:font-bold`}
          >
            Dashboard
          </Link>
        </li>

        <li>
          <Link
            to={"/user/booking"}
            className={`transition-all flex items-center justify-center ${
              pathname.includes("/user/booking") ? "font-bold" : "font-medium"
            } hover:font-bold`}
          >
            Bookings    
          </Link>
        </li>

        <li>
          <Link
            to={"/user/profile"}
            className={`transition-all flex items-center justify-center ${
              pathname.includes("/user/profile")
                ? "font-bold"
                : "font-medium"
            } hover:font-bold`}
          >
            Profile
          </Link>
        </li>

        <li>
          <Link
            to={"/user/settings"}
            className={`transition-all flex items-center justify-center ${
              pathname.includes("/user/settings") ? "font-bold" : "font-medium"
            } hover:font-bold`}
          >
            Settings
          </Link>
        </li>
      </ul>
      <Button text='Logout' onClick={(e)=>(e.preventDefault())} styles='w-full rounded-lg' />
    </nav>
  );
};

export default DashboardNavbar;
