"use client";
import { Product } from "@/src/interfaces";
import { currency } from "@/src/lib/fxns";
import { useShoppingCart } from "@/src/store/useShoppingCart";
import { useWishlist } from "@/src/store/useWishlist";
import { Item } from "@prisma/client";
import Link from "next/link";
import React, { useState } from "react";
import toast from "react-hot-toast";
import {
  AiFillStar,
  AiOutlineStar,
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";

const ProductCard: React.FC<Product> = ({
  quantity,
  cardStyles,
  imgStyles,
  id,
  name,
  category,
  images,
  description,
  rating,
  price,
  product,
}) => {
  const [currentImg, setCurrentImg] = useState(0);

  const { cartItems, addToCart, openCart } = useShoppingCart((state) => state);
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist(
    (state) => state
  );

  // Product stars
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (rating && i + 1 < rating) {
      stars.push(<AiFillStar key={i + 1} />);
    } else {
      stars.push(<AiOutlineStar key={i + 1} />);
    }
  }

  const alreadyInCart = cartItems.find((item) => item.item.id === product.id);

  return (
    <div className={` ${cardStyles} flex flex-col justify-center`}>
      <div className="header-section relative">
        {wishlist.find((item) => item.id === product.id) ? (
          <AiFillHeart
            onClick={() => {
              removeFromWishlist(product.id);
              toast.success("Item removed from wishlist");
            }}
            className=" bg-white rounded-full absolute top-2 right-2 z-5 cursor-pointer text-[28px] p-2"
          />
        ) : (
          <AiOutlineHeart
            onClick={() => {
              addToWishlist(product);
              toast.success("Item added to wishlist");
            }}
            className=" bg-white rounded-full absolute top-2 right-2 z-5 cursor-pointer text-[28px] p-2"
          />
        )}

        <div
          className={`product-imgs w-full bg-cover bg-center transition ease delay-150 ${imgStyles} `}
          style={{
            backgroundImage: `url(${
              images && images.length > 0
                ? images[currentImg]
                : "/products/product-1_1.png"
            })`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundOrigin: "center",
          }}
          onMouseOver={() =>
            images.length > 0 && setCurrentImg(images.length - 1)
          }
          onMouseLeave={() => images.length > 0 && setCurrentImg(0)}
        ></div>
        <p className="category py-2 text-text-color-trans text-xs ">
          {category}
        </p>
        <Link href={`/product/${id}`} className="leading-[20px] text-[16px]">
          {name}
        </Link>
        <div className="rating flex py-2 justify-start items-center ">
          {stars.map((star) => star)}
        </div>
      </div>

      <div className=" w-full footer-section flex justify-between items-center mt-8 ">
        <button
          disabled={alreadyInCart ? true : false}
          onClick={() => {
            addToCart({ item: product, quantity: 1 });
            openCart();
            toast.success("Item added to cart");
          }}
          className="btn btn-cart text-[14px]"
        >
          {alreadyInCart ? "IN CART" : "ADD TO CART"}
        </button>
        <span className="font-bold  ">
          {currency(parseFloat(price?.toString() || "0"))}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
