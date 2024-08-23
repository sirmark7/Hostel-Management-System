import { PropTypes } from "prop-types";
import RoomCard  from "./RoomCard";


const BookedList = ({bookedItems}) => {


  return (
    <div className=" w-full gap-5 flex-1 flex flex-col justify-start mb-10 items center">
      <span>
        <h1 className="uppercase w-full text-left text-[18px]">Booked Rooms</h1>
        <p className="">{  bookedItems?.length} Rooms</p>
      </span>
      <div className="products-list mb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 justify-items-center md:justify-items-center lg:justify-items-end flex-1 ">
        {  bookedItems?.map((product) => (
          <RoomCard
            key={product?.room._id}
            // @ts-ignore
            category={product?.room.category.name}
            description={product?.room.description}
            images={product?.room.images}
            name={product?.room.name}
            price={product?.room.price.toString()}
            id={product?.room._id}
            product={product?.room}
            fullProduct={product}
            detailLink='/dashboard/book'
            cardStyles="w-full max-w-[250px] "
            imgStyles="h-[200px]"
            quantity={product?.room?.occupancy}

          />
        ))}
      </div>
    </div>
  );
};
BookedList.propTypes={
  bookedItems:PropTypes.array
}
export default BookedList;
 