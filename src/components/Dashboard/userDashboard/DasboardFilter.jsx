import FilterCard from "../../FilterCard";
import { categories } from "../../utils/data";
import useFilters from "../../store/useFilters"
import { PropTypes } from "prop-types";
import { useState } from "react";
import { FaFilter } from "react-icons/fa6";
const DashboardFilters = () => {

  const {addCategoryFilter,addPriceFilter}=useFilters()
  const [showFilters,setShowFilters]=useState(false)

  return (
    <div className="relative w-full flex justify-end tansition" >
        <span className="flex mr-[20px] cursor-pointer text-primary-color whitespace-nowrap justify-center items-center gap-2" onClick={()=>setShowFilters(prev=>!prev)}>
            <FaFilter className="font-bold text-[20px]" />
             Filters
        </span>
      <div className={` transition  ${showFilters?"right-[10px]":'right-[-300px]'} top-11 bg-white p-2 absolute right-0 h-fit hidden md:flex flex-col z-50 gap-5 mt-2 `}>
        {/* Categories */}
        <FilterCard
          id={0}
          title={"Categories"}
          triggerFilter={addCategoryFilter}
          options={categories.map((category) => ({
            label: category.name.toLowerCase(),
            name: category.name.toLowerCase(),
            // value: `${category}`,
            value: category.name.toLocaleLowerCase(),
          }))}
        />

        {/* Price */}
        <FilterCard
          id={1}
          title={"Price"}
          triggerFilter={addPriceFilter}
          options={[
            { label: `Under ₵50 `, name: "id50", value: "0:50" },
            { label: "₵50 to ₵100", name: "id50-100", value: "50:100" },
            {
              label: "₵100 to ₵500",
              name: "id100-500",
              value: "100:500",
            },
            { label: "Above ₵500", name:"id500", value: "500:0" },
          ]}
        />
      </div>
    </div>
  );
};
DashboardFilters.propTypes={
  styles:PropTypes.string
}
export default DashboardFilters;
