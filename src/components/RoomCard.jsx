

import { PropTypes } from "prop-types";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import useWishlist from "./store/useWishlist";
// import { useEffect } from "react"
// import { wishlist} from "./utils/data";
import {
  AiFillStar,
  AiOutlineStar,
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";

const RoomCard = ({
  cardStyles,
  imgStyles,
  id,
  name,
  category,
  images,
  rating,
  price,
  product,
}) => {
  const [currentImg, setCurrentImg] = useState(0);

 
  const { wishlistData, addToWishlist, removeFromWishlist } = useWishlist(product);

  // Product stars
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (rating && i + 1 < rating) {
      stars.push(<AiFillStar key={i + 1} />);
    } else {
      stars.push(<AiOutlineStar key={i + 1} />);
    }
  }

  const alreadyInCart = wishlistData?.find((item) => item.id === product.id);

  return (
    <div className={` ${cardStyles} flex flex-col justify-center`}>
      <div className="header-section relative">
        {wishlistData?.find((item) => item.id === product.id) ? (
          <AiFillHeart
            onClick={() => {
              removeFromWishlist();
              toast.success("Item removed from wishlist");
            }}
            className=" bg-white rounded-full absolute top-2 right-2 z-5 cursor-pointer text-[28px] p-2"
          />
        ) : (
          <AiOutlineHeart
            onClick={() => {
              addToWishlist();
              toast.success("Item added to wishlist");
            }}
            className=" bg-white rounded-full absolute top-2 right-2 z-5 cursor-pointer text-[28px] p-2"
          />
        )}

        <div
          className={`product-imgs w-full bg-cover bg-center transition ease delay-150 ${imgStyles} `}
          style={{
            backgroundImage: `url(./rooms/${
              images && images.length > 0
                ? images[currentImg]
                : "./rooms/room_a_1.jpg"
            })`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundOrigin: "center",
          }}
          onMouseOver={() =>
            images.length > 0 && setCurrentImg(images.length - (images.length-1))
          }
          onMouseLeave={() => images.length > 0 && setCurrentImg(0)}
        ></div>
        <p className="category py-2 text-text-color-trans text-xs ">
          {category}
        </p>
        <NavLink to={`/hostels/${id}`} className="leading-[20px] text-[16px]">
          {name}
        </NavLink>
        <div className="rating flex py-2 justify-start items-center ">
          {stars.map((star) => star)}
        </div>
      </div>

      <div className=" w-full footer-section flex justify-between items-center mt-8  ">
        <button
          disabled={alreadyInCart ? true : false}
          onClick={() => {
           
            toast.success("Item added to wishlist");
          }}
          className="btn btn-cart text-[14px] cursor-pointer"
        >
          {alreadyInCart ? "IN WISHLIST" : "BOOK NOW"}
        </button>
        <span className="font-bold  ">
          {price}
        </span>
      </div>
    </div>
  );
};

RoomCard.propTypes={
    quantity:PropTypes.number,
  cardStyles:PropTypes.string,
  imgStyles:PropTypes.string,
  id:PropTypes.number,
  name:PropTypes.string,
  category:PropTypes.string,
  images:PropTypes.array,
  description:PropTypes.string,
  rating:PropTypes.number,
  price:PropTypes.string,
  occupancy:PropTypes.number,
  product:PropTypes.object,
}

export default RoomCard;
