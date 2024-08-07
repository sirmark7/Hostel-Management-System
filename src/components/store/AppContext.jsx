import { PropTypes } from "prop-types";
import { createContext, useEffect, useState } from "react";
import {rooms} from "../utils/data";
export const WishlistContext =createContext([])
export const HostelsContext =createContext([])
export const UserContext =createContext({})
export const FilterContext =createContext({})


const AppContext = ({children}) => {
    const [hostelData,setHostelData]=useState([])
    const [filteredData, setFilteredData] = useState([]);
    const [wishlistData,setWishlistData]=useState([])
    const [userData,setUserData]=useState([])

    useEffect(()=>{
        setHostelData(rooms)
        setFilteredData(rooms)
    },[])

    
  return (
    <HostelsContext.Provider value={{hostelData,setHostelData}}>
        <FilterContext.Provider value={{filteredData,setFilteredData}}>
            <UserContext.Provider value={{userData,setUserData}}>
                <WishlistContext.Provider value={{wishlistData,setWishlistData}}>
                    {children}
                </WishlistContext.Provider>
            </UserContext.Provider>
        </FilterContext.Provider>
    </HostelsContext.Provider>
  )
}

AppContext.propTypes={
    children:PropTypes.node
}
export default AppContext