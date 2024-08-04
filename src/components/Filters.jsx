import FilterCard from "./FilterCard";
import { categories } from "./utils/data";

const Filters = () => {

  return (
    <div>
      <div className=" hidden md:flex flex-col gap-5 mt-5  min-h-[70vh]">
        {/* Categories */}
        <FilterCard
          id={0}
          title={"Categories"}
          options={categories.map((category) => ({
            label: category.name.toLowerCase(),
            name: category.name.toLowerCase(),
            value: `category:${category.id}`,
          }))}
        />

        {/* Price */}
        <FilterCard
          id={1}
          title={"Price"}
          options={[
            { label: `Under ₵50 `, name: "50", value: "end-50" },
            { label: "₵50 to ₵100", name: "50-100", value: "start-50:end-100" },
            {
              label: "₵100 to ₵500",
              name: "100-500",
              value: "start-100:end-500",
            },
            { label: "Above ₵500", name: "500", value: "start-500" },
          ]}
        />
      </div>
    </div>
  );
};

export default Filters;
