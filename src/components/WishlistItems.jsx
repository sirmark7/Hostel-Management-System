import RoomCard  from "./RoomCard";
import useWishlist from "./store/useWishlist";


const WishlistItems = () => {
  const {   wishlistData } = useWishlist();
  return (
    <div className=" w-full gap-5 flex-1 flex flex-col justify-start mb-10 items center">
      <span>
        <h1 className="uppercase w-full text-left text-[18px]">Saved Items</h1>
        <p className="">{  wishlistData.length} Items</p>
      </span>
      <div className="products-list mb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 justify-items-center md:justify-items-center lg:justify-items-end flex-1 ">
        {  wishlistData.map((product) => (
          <RoomCard
            key={product.id}
            // @ts-ignore
            category={product.category.name}
            description={product.description}
            images={product.images}
            name={product.name}
            price={product.price.toString()}
            id={product.id}
            product={product}
            rating={
            
              product.stars.length > 0
                ? 
                  product.stars.reduce((acc, s) => {
                    return acc + s.stars;
                   
                  }, 0) / product.stars.length
                : 0
            }
            cardStyles="w-full max-w-[250px] "
            imgStyles="h-[200px]"
            quantity={product.quantity}
          />
        ))}
      </div>
    </div>
  );
};

export default WishlistItems;
