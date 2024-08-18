import { WishlistContext } from "./AppContext"
import { useContext } from "react"


const useWishlist = (item)=>{
  const {wishlistData,setWishlistData}=useContext(WishlistContext)
 
      const  addToWishlist= () => {
        const newWishlist =[...wishlistData,item]
          setWishlistData(newWishlist)
        }
      const removeFromWishlist = () => {
          const newWishlist= wishlistData.filter((wishItem) => wishItem.id !== item.id)
          setWishlistData(newWishlist)
        }

        return{
          wishlistData,
          addToWishlist,
          removeFromWishlist
        }
}

export default useWishlist;