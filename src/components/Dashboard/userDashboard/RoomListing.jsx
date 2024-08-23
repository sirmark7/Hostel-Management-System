
import RoomCard from "../../RoomCard";
import {FilterContext} from "../../store/AppContext";
import { useContext } from "react";
import DashboardFilters from "./DasboardFilter";

const RoomListing = () => {
  const {filteredData}=useContext(FilterContext)


  return (

      <div className="flex flex-col justify-center md:justify-between items-start relative pb-[250px]">
        <DashboardFilters/>
        <div className=" w-full products-list mt-10 mb-5 grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-3 justify-items-center lg:justify-items-center flex-1 ">
    
        {filteredData?.map((product) => (
            <RoomCard
            key={product._id}
            category={product.category.name}
            description={product.description}
            images={product.images}
            name={product.name}
            price={product.price.toString()}
            id={product._id}
            detailLink='book'
            cardStyles="w-full max-w-[250px] "
            imgStyles="h-[200px]"
            quantity={product.quantity}
            product={product}
            />
        ))}
        </div>
      </div>
  
  );
};

export default RoomListing;
