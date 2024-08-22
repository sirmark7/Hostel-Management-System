import { PropTypes } from "prop-types";
import { createContext, useCallback, useEffect, useState } from "react";
import Loader from "../Loader";
import useRequestResorce from "./useRequestresource";
export const WishlistContext =createContext([])
export const BookedContext =createContext([])
export const HostelsContext =createContext([])
export const UserContext =createContext({})
export const FilterContext =createContext({})
export const AuthContext =createContext()
export const LoaderContext =createContext()

const AppContext = ({children}) => {
  
    const [isLogged,setIsLogged]=useState(false)
    const [hostelData,setHostelData]=useState([])
    const [filteredData, setFilteredData] = useState();
    const [wishlistData,setWishlistData]=useState([])
    const [booked,setBooked]=useState([])
    const [userData,setUserData]=useState([])
    const [isLoading,setIsLoading]=useState()
    const {getAllRooms}=useRequestResorce()

const handleFetchData=useCallback(async()=>{
        await getAllRooms()
        .then((res)=> {
            setHostelData(res.data)
            setFilteredData(res.data)
        })
       
},[getAllRooms])

    useEffect(()=>{
    handleFetchData()        
    },[])


    
  return (
    <AuthContext.Provider value={{isLogged,setIsLogged}}>
        <LoaderContext.Provider value={{isLoading,setIsLoading}}>
            <HostelsContext.Provider value={{hostelData,setHostelData}}>
                <FilterContext.Provider value={{filteredData,setFilteredData}}>
                    <UserContext.Provider value={{userData,setUserData}}>
                        <BookedContext.Provider value={{booked,setBooked}}>
                        <WishlistContext.Provider value={{wishlistData,setWishlistData}}>
                            {children}
                            {isLoading && <Loader/>}
                        </WishlistContext.Provider>
                        </BookedContext.Provider>
                    </UserContext.Provider>
                </FilterContext.Provider>
            </HostelsContext.Provider>
        </LoaderContext.Provider>
    </AuthContext.Provider>
  )
}

AppContext.propTypes={
    children:PropTypes.node
}
export default AppContext