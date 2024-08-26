import  { useCallback, useContext, useEffect, useState} from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import {
  AiFillStar,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineStar,
} from "react-icons/ai";
import DropDown from "../DropDown";
import RatingReviewCard from "../RatingReviewCard";
import ModalCard from "../ModalCard";
import toast from "react-hot-toast";
import useWishlist from "../store/useWishlist";
import { useParams,useNavigate, useOutletContext } from "react-router-dom";
import { AuthContext, BookedContext, HostelsContext, LoaderContext } from "../store/AppContext";
import useRequestResorce from "../store/useRequestresource";


const RoomDetail = () => {
    const { roomId } = useParams();
    const route=useNavigate()
  const [room, setRoom] = useState(null);
  const [slot, setSlot] = useState(1);
  const [isBooked,setIsBooked]=useState()
  const [isActive, setIsActive] = useState();
  const {wishlistData,}=useWishlist()
  const {setIsLoading} = useContext(LoaderContext)
  const {hostelData}=useContext(HostelsContext)
  const {setBooked}=useContext(BookedContext)
  const {booked}=useOutletContext()
  const {isLogged}=useContext(AuthContext)
  const userId =localStorage.getItem('userId')
const {createBooking,cancleBooking}=useRequestResorce()
  const detailTitles= [
    "description",
    "facilities",
    "location",
  ];



  const handleGetroom =useCallback(async () => {
    setIsLoading(true);
    try {
      const response = hostelData.find((room)=>room._id === roomId );
      const result =booked.find((room)=>room.room._id===roomId)
      setIsBooked(result)  
      setRoom(response);
    } catch (error) {
      toast.error("Error loading room");
    } finally {
      setIsLoading(false);
    }
  },[])

  const handleIsActive = () => {
    setIsActive((prev) => !prev);
  };

const handleBooking=async()=>{
   if (!isLogged && !!userId) {
            toast.error("Please sign in to book a room.");
            return;
        }
  setIsLoading(true)
  await createBooking(roomId,slot)
  .then((res)=>{
      setIsLoading(false)
    setBooked([...booked,res.data])
    toast.success('Room Booked Successfully')
    })
  .then(()=>setIsLoading(false))

}



const handleCancleBooking=async()=>{
   if (!isLogged && !!userId) {
            toast.error("Please sign in to book a room.");
            return;
        }
  setIsLoading(true)
  // await cancleBooking(roomId)
  // .then((res)=>{
  //    const result=booked.filter((room)=>room.room._id!==res?.data.room._id)
  //   setBooked(result)
  //   toast.success('Booking Cancled Successfully')
  //   console.log('result',result);
    
  //   })
  // .then(()=>setIsLoading(false))
  route('/dashboard/booking')
  window.location.reload()
}
const handleUpdateBooking=async()=>{
   if (!isLogged && !!userId) {
            toast.error("Please sign in to book a room.");
            return;
        }
  setIsLoading(true)
  const updateSlot=isBooked.room.slot+slot
  await updateBooking(roomId,updateSlot)
  .then((res)=>{
      setIsLoading(false)
    setBooked([...booked,res.data])
    toast.success('Room Booked Successfully')
    })
  .then(()=>setIsLoading(false))

}
  useEffect(() => {
    if (!room) {
      handleGetroom();
    }
  }, []);

  const mainImg = room?.images?.length > 0 ? room?.images[0] :"rooms/room_e_1.jpg";

  const stars = [];
  const rating =
    room?.stars?.length > 0
      ? room?.stars?.reduce((acc, s) => ( acc + s)) 
      : 0;

console.log(rating);

  for (let i = 0; i < 5; i++) {
    if (rating && i + 1 <= rating) {
      stars.push(<AiFillStar key={i + 1} />);
    } else {
      stars.push(<AiOutlineStar key={i + 1} />);
    }
  }

  const alreadyInWishlist = wishlistData?.find((item) => item.id === room?.id);

  return  (
    <div className=" relative w-full gap-10 mb-[100px] flex flex-col justify-center items-center">
      <div className="w-full product-info my-10 flex lg:flex-row flex-col lg:gap-2 gap-4 lg:justify-center lg:items-start justify-start items-center">
       <button className="btn absolute right-0 top-0" onClick={()=>route(-1)}> Back</button>
        <div className="images-display h-[350px] overflow-y-hidden flex justify-start items-start">
          <Swiper
            modules={[Mousewheel]}
            direction={"vertical"}
            slidesPerView={3.2}
            spaceBetween={0}
            mousewheel={true}
            className="h-full"
          >
            {room?.images?.map((image, i) => (
              <SwiperSlide key={i}>
                <img
                  className="sm:hidden md:flex"
                  src={`../../../server/src/uploads/${image}`}
                  alt={image}
                  height={120}
                  width={100}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <img
            className="h-full object-cover "
            src={`../../../server/src/uploads/${mainImg}`}
            alt={mainImg}
            width={320}
            height={390}
          />
        </div>

        <div className="product-details max-w-[none] md:max-w-[600px] flex flex-col px-10 gap-2 flex-1">
          <h1 className="text-[16px]">{room?.name}</h1>
          <span className=" w-full flex justify-start items-center gap-5">
            <p className="font-bold">
              {room && room?.price ? room.price.toString() : "0.00"}
            </p>
            <p className=" text-btn-bg ">occupancy: {room?.occupancy}</p>
          </span>
          <span className=" w-full flex justify-start items-center gap-5">
            <ul className="flex justify-start items-center">
              {stars.map((star) => star)}
            </ul>
            <p
              onClick={handleIsActive}
              className=" text-text-color cursor-pointer text-[14px] underline "
            >
              {room &&
             
              room?.stars
                ?
                  room?.stars.length
                : 0}{" "}
              reviews
            </p>
          </span>
          <p className="text-[14px]">{room?.description}</p>

          <div className="action-btn flex justify-start items-center border-[1px] border-gray-color ">
            <button
              onClick={() => slot > 1 && setSlot((prev) => prev - 1)}
              className="flex-2 px-5 "
            >
              <AiOutlineMinus className="text-[14px]" />
            </button>
            <span className="flex flex-3 p-1"> {slot}</span>

            <button
              onClick={() =>
                room &&
                slot < room?.slot?
                setSlot((prev) => prev + 1)
                :toast.error('occupancy limit reached')
              }
              className="flex-2 px-5 h-full"
            >
              <AiOutlinePlus className="text-[14px]" />
            </button>
            {isBooked?
           <> <button
              onClick={() =>handleCancleBooking(room)}
              className="uppercase flex-1 border-l-2 py-3 transition-all duration-75 ease-in-out bg-red-500 text-[14px] text-background-color hover:bg-red-600 "
            >
              CANCEL 
            </button>
            <button
              disabled={true}
              onClick={()=>handleUpdateBooking(room)}
              className="uppercase flex-2 px-4 border-l-2 py-3 transition-all duration-75 ease-in-out bg-text-color text-[14px] text-background-color cursor-not-allowed"
            >
              {isBooked.status}
            </button>
            </>
            :
            <>
            <button
              onClick={() =>route(-1)}
              className="uppercase flex-1 border-l-2 py-3 transition-all duration-75 ease-in-out bg-red-500 text-[14px] text-background-color hover:bg-red-600 "
            >
              CANCEL
            </button>
            <button
              disabled={alreadyInWishlist ? true : false}
              onClick={()=>handleBooking(room)}
              className="uppercase flex-1 border-l-2 py-3 transition-all duration-75 ease-in-out bg-text-color text-[14px] text-background-color hover:bg-background-color hover:text-text-color"
            >
              {alreadyInWishlist ? "In wishlist" : "Book now"}
            </button>
            </>
            }
          </div>
          <div>
            {detailTitles.map((titles, i) => (
              <DropDown key={i} title={titles}>
                <div className="text-[12px]">{room && room[titles]}</div>
              </DropDown>
            ))}
          </div>
        </div>
      </div>

      <ModalCard
        isActive={isActive}
        handleIsActive={handleIsActive}
        heading={"Ratings & Reviews"}
      >
        <RatingReviewCard />
      </ModalCard>
    </div>
  );
};

export default RoomDetail;
