import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const FilterCard = ({ id, title, options,triggerFilter }) => {
const [activeFilter, setActiveFilter] = useState(false);
 const router = useNavigate();


  return (
    <details className="w-[180px] filter-card flex flex-col justify-start items-start">
      <summary
        onClick={() => setActiveFilter((prev) => !prev)}
        className="w-full cursor-pointer flex justify-between items-center font-[500]  text-[18px] "
      >
        {title} <span className="flex pr-3 ">{activeFilter ? "-" : "+"}</span>
      </summary>
      <div className=" flex flex-col justify-start mt-5 gap-2 items-start">
        {options.map((option, i) => (
          <span
            key={i}
            className="flex gap-1 justify-center  items-center cursor-pointer"
          >
            <input
              className="text-text-color-trans cursor-pointer"
              type="checkbox"
              name={option.name}
              id={option.name}
              onChange={(e) => {
                // console.log("Option.value:", option, option.value);
                triggerFilter(option.value, e.currentTarget.checked);
              }}
            />
            <label
              htmlFor={option.name}
              className="capitalize text-[14px] text-text-color-trans cursor-pointer "
            >
              {option.label}
            </label>
          </span>
        ))}
      </div>
    </details>
  );
}

export default FilterCard;
