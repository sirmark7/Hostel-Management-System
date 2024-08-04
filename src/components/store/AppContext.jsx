import { PropTypes } from "prop-types";
import { createContext, useState } from "react";

export const WishlistContext =createContext([])
export const HostelsContext =createContext([])
export const UserContext =createContext({})


const AppContext = ({children}) => {
    const [hostelData,setHostelData]=useState([])
    const [wishlistData,setWishlistData]=useState([])
    const [userData,setUserData]=useState([])
  return (
    <HostelsContext.Provider value={{hostelData,setHostelData}}>
        <UserContext.Provider value={{userData,setUserData}}>
            <WishlistContext.Provider value={{wishlistData,setWishlistData}}>
                {children}
            </WishlistContext.Provider>
        </UserContext.Provider>
    </HostelsContext.Provider>
  )
}

AppContext.propTypes={
    children:PropTypes.node
}
export default AppContext