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
export const UserListContext=createContext([])
export const AllBookingsContext =createContext([])

const AppContext = ({children}) => {
  
    const [isLogged,setIsLogged]=useState(false)
    const [hostelData,setHostelData]=useState([])
    const [filteredData, setFilteredData] = useState();
    const [wishlistData,setWishlistData]=useState([])
    const [booked,setBooked]=useState([])
    const [allBooked,setAllBooked]=useState([])
    const [userData,setUserData]=useState({})
    const [userList,setUserList]=useState([])
    const [isLoading,setIsLoading]=useState()
    const {getAllRooms,getAllUsers,getBookings,getAllBookings}=useRequestResorce()

const handleFetchData=useCallback(async()=>{
    setIsLoading(true)
        await Promise.all([getAllRooms(),getAllUsers(),getBookings(),getAllBookings()])
        .then((res)=> {
            console.log(res)
            setHostelData(res[0].data)
            setFilteredData(res[0].data)
            setUserList(res[1].data)
            setBooked(res[2].data)
            setAllBooked(res[3].data)
            
        })
        .finally(()=>setIsLoading(false))
       
},[getAllBookings, getAllRooms, getAllUsers, getBookings])

    useEffect(()=>{
    handleFetchData()    
    },[])


    
  return (
    <AuthContext.Provider value={{isLogged,setIsLogged}}>
        <LoaderContext.Provider value={{isLoading,setIsLoading}}>
            <HostelsContext.Provider value={{hostelData,setHostelData}}>
                <BookedContext.Provider value={{booked,setBooked}}>
                    <AllBookingsContext.Provider value={{allBooked,setAllBooked}}>
                        <UserListContext.Provider value={{userList,setUserList}}>
                            <FilterContext.Provider value={{filteredData,setFilteredData}}>
                                <UserContext.Provider value={{userData,setUserData}}>
                                    <WishlistContext.Provider value={{wishlistData,setWishlistData}}>
                                        {children}
                                        {isLoading && <Loader/>}
                                    </WishlistContext.Provider>
                                </UserContext.Provider>
                            </FilterContext.Provider>
                        </UserListContext.Provider>
                    </AllBookingsContext.Provider>
                </BookedContext.Provider>
            </HostelsContext.Provider>
        </LoaderContext.Provider>
    </AuthContext.Provider>
  )
}

AppContext.propTypes={
    children:PropTypes.node
}
export default AppContext