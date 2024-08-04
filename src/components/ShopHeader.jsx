import { filterCard } from "./utils/data";
import { useState } from "react";
import { AiOutlineFunnelPlot } from "react-icons/ai";
import FilterCard from "./FilterCard";


const ShopHeader = () => {
  const [activeFilter, setActiveFilter] = useState(false);
  // const { queryRoute } = useFilters((state) => state);
  const queryRoute=false

  return (
    <header className="flex w-full justify-between mb-5 items-center">
      <span className="w-full">
        <h2 className="">HOSTELS</h2>
        <span className="text-text-color-trans flex justify-between items-center w-full">
          {queryRoute && queryRoute.length > 1 ? "Search results" : "All rooms"}
          <details className=" block md:hidden relative">
            <summary>
              <h3
                onClick={() => setActiveFilter((prev) => !prev)}
                className="md:hidden flex items-center w-full justify-end font-semibold text-[18px] cursor-pointer"
              >
                Filters <AiOutlineFunnelPlot /> {activeFilter ? "-" : "+"}
              </h3>
            </summary>
            <div
              className={` flex md:hidden flex-col gap-5 mt-5 p-5 right-0 top-0  min-h-[70vh] bg-background-color absolute z-10 transition-all duration-300  `}
            >
              {filterCard.map((filter, i) => (
                <FilterCard
                  id={filter.id}
                  key={i}
                  title={filter.title}
                  options={filter.options}
                />
              ))}
            </div>
          </details>
        </span>
      </span>
    </header>
  );
};

export default ShopHeader;
