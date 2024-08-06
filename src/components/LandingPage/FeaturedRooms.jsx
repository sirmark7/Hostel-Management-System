import SubHeading from "../SubHeading";
import RoomCard from "../RoomCard";
// Import Swiper React components
import { SwiperSlide } from "swiper/react";
import { SwiperJs } from "../SwipperJs";
import { useEffect} from "react";
import {rooms} from '../utils/data'

// import axios from "axios";

const FeaturedRooms = () => {
  // const [roomList, setRoomList] = useState([]);

  // const fetchFeaturedItems = async () => {
  //   try {
  //     // Featured items are items updated within the last 7 days
  //     const response = await axios.get("/api/public/items?featured=true");
  //     setItems(response.data);
  //   } catch (error) {
  //     console.log("Featured items fetch failed");
  //   }
  // };

  useEffect(() => {
    // setRoomList(rooms)
    // fetchFeaturedItems();
  }, []);
   


  return (
    <section className="featured max-w-[90%] ">
      <SubHeading
        heading="Featured rooms"
        text={`Discover our selection of top-rated rooms, each offering a unique blend of comfort and style. Handpicked for their exceptional amenities and prime locations, these rooms promise an unforgettable stay. Explore the best accommodations now and find your perfect home away from home!`}
      />

      <SwiperJs>
        {rooms.map((room) => (
          <SwiperSlide key={room.id}>
            <RoomCard
            product={room}
              name={room.name}
              price={room.price ? room.price.toString() : "0.00"}
              id={room.id}
              category={room.category}
              images={room.images}
              description={room.description}
              rating={
                room.stars.length > 0
                  ? 
                    room.stars.reduce((acc, s) => {
                      return acc + s.stars;
                    }, 0) / room.stars.length
                  : 0
              }
              cardStyles="min-w-[300px] max-w[302px]"
              imgStyles="h-[300px]"
              occupancy={room.occupancy}
            />
          </SwiperSlide>
        ))}
      </SwiperJs>
    </section>
  );
};

export default FeaturedRooms;
