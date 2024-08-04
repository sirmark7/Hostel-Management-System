
import RoomCard from "../RoomCard";
import {rooms} from "../utils/data";

const RoomList = () => {
  

  return (
    <div className="products-list mb-5 grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-3 justify-items-center lg:justify-items-end flex-1">
      {/* <InitializeFilters
        search={search}
        featured={featured}
        categories={categories}
        start={start}
        end={end}
      /> */}
      {rooms.map((product) => (
        <RoomCard
          key={product.id}
          category={product.category.name}
          description={product.description}
          images={product.images}
          name={product.name}
          price={product.price.toString()}
          id={product.id}
          rating={
            product.stars.length > 0
              ? product.stars.reduce((acc, s) => {
                  return acc + s.stars;
                }, 0) / product.stars.length
              : 0
          }
          cardStyles="w-full max-w-[250px] "
          imgStyles="h-[200px]"
          quantity={product.quantity}
          product={product}
        />
      ))}
    </div>
  );
};

export default RoomList;
