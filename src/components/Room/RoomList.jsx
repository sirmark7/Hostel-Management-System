
import { useOutletContext } from "react-router-dom";
import RoomCard from "../RoomCard";

import RoomsLayout from "./RoomsLayout";
const RoomList = () => {
const {filteredData}=useOutletContext()

  return (
    <RoomsLayout>
    <div className="products-list mb-5 grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-3 justify-items-center lg:justify-items-end flex-1 ">
      {/* <InitializeFilters
        search={search}
        featured={featured}
        categories={categories}
        start={start}
        end={end}
      /> */}
      {filteredData?.map((product) => (
        <RoomCard
          key={product._id}
          category={product.category.name}
          description={product.description}
          images={product.images}
          name={product.name}
          price={product.price.toString()}
          id={product._id}
          detailLink='/hostels'
          cardStyles="w-full max-w-[250px] "
          imgStyles="h-[200px]"
          quantity={product.quantity}
          product={product}
  
        />
      ))}
    </div>
    </RoomsLayout>
  );
};

export default RoomList;
