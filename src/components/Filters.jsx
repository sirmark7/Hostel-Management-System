import FilterCard from "./FilterCard";
import { categories } from "./utils/data";
import useFilters from "./store/useFilters"
const Filters = () => {

  const {addCategoryFilter,addPriceFilter}=useFilters()

  return (
    <div>
      <div className=" hidden md:flex flex-col gap-5 mt-5  min-h-[70vh]">
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

export default Filters;
