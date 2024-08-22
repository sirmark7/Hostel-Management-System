import { useCallback, useContext } from "react";
import { fetchQuery, fetchQueryAuth, } from "./fetchFuction";
import {HostelsContext,UserContext,BookedContext,WishlistContext,FilterContext} from "./AppContext";
import toast from "react-hot-toast";


const useRequestResorce=()=>{
    const {hostelData,setHostelData}=useContext(HostelsContext)
    const {filteredData, setFilteredData} = useContext(FilterContext);
    const {wishlistData,setWishlistData}=useContext(WishlistContext)
    const {booked,setBooked}=useContext(BookedContext)
    const {userData,setUserData}=useContext(UserContext)


    const token = localStorage.getItem('authToken');
    const userId = localStorage.getItem('userId');


//create new deal
const createRoom = useCallback(async (name,price,oldPrice, hostel,location,slot, occupancy, stars, category,description,facilities,images) => {
      if(!name && !price && !oldPrice &&! hostel && !location && !slot && !occupancy &&  !stars &&!category && !description && !facilities && !images){ 
         toast.error('Please fill in all fields')
         throw new Error('Ensure all fields are provided')
      }
     
   
      
        const newRoomData = new FormData();
      newRoomData.append("fullName",name)
      newRoomData.append("price",price)
      newRoomData.append("oldPrice",oldPrice)
      newRoomData.append("hostel",hostel)
      newRoomData.append("location",location)
      newRoomData.append("slot",{slot:slot?slot:occupancy})
      newRoomData.append("occupancy",occupancy)
      newRoomData.append("stars",stars)
      newRoomData.append("category",category)
      newRoomData.append("description",description)
      newRoomData.append("facilities",facilities)
      newRoomData.append("images",images)
           
console.log('sentdata',newRoomData);
 
        const response = await fetch(`http://localhost:5000/api/room`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`, // Set only the Authorization header
        },
        body: newRoomData, // Set the body as FormData
    });

  if (response.statusCode !== 200) {
    
    throw new Error(response);
  }

  setHostelData([...hostelData,response.data])
  

  toast.success('Room Created Successfully')
  return [true,response.data]
},[])



// get Bookind on test
  const getAllBookings = useCallback(async () => {
    try {
      const response = await  fetchQuery(`bookings`, token)

      if (response.statusCode !== 200) {
        throw new Error('Failed to fetch Bookings');
      }

      setDealInfo(dealTransaction.data);
      setCardTransactionInfo(cardTransaction.data);
      
    } catch (error) {
      console.error(error);
    }
  }, []);


// get user data
  const getUserData = useCallback(async () => {
 ;
    try {
      const response = await fetchQuery(`users`, token);
      if (response.statusCode !== 200) {
        throw new Error(response.message);
      }
      
      localStorage.setItem('userId', response.data._id);
      setUserData(response.data);
         
    } catch (error) {
      console.error(error);
    } 
    
    ;
  }, []);



const updateRoom=useCallback(async(data)=>{
   try  {
        const formData = new FormData();
        
        const response = await fetch(`rooms/${data._id}`, {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${token}`, // Set only the Authorization header
        },
        body: formData, // Set the body as FormData
    });
      
   
       if (!response.ok) {
       
        throw new Error(`Error: ${response.statusText}`);
    }
        const data = await response.json()
        setUserData(data.data)
    
      toast.success('Profile Updates Successful')
      return true
    } catch (error) {
    
      console.error(error);
    } 
},[])

// create booking
  const createBooking = useCallback(async (room) => {
    const bookingData={
      user:userId,
      room:room._id
    }
    try {
      const response = await  fetchQuery(`bookings`, token, 'POST',bookingData )

     if (response.statusCode !== 201) {
        toast.error(response?response.message:response?.error)
        throw new Error(response);
      }
        setBooked([...booked,response.data])
        return response
    } catch (error) {
      console.error(error);
    }
  }, []);

// get Rooms - working
  const getAllRooms = useCallback(async () => {
    const response = await fetchQuery(`rooms`, token);
   if (response.statusCode !== 200) {
        toast.error(response?response.message:response?.error)
        throw new Error(response);
      }
    return response
  
  }, []);

// signup - working
  const signUp=useCallback(async(fullName,email,phoneNumber,password)=>{
    if(!fullName||!email||!phoneNumber||!password){
      toast.error('All feilds are required')
      throw new Error('All feilds are required')
    }
   const singUpData= {
  fullName,email,phoneNumber,password
}

    try {
   
      const response =await fetchQueryAuth('users/register','POST',singUpData)
   
      if (response.statusCode !== 201) {
        toast.error(response?response.message:response?.error)
        throw new Error(response);
      }
      toast.success('Signup up Successful')
      return response
    } catch (error) {
      console.error(error);
    } 
    
  },[]);

// login - worksing
  const login=useCallback(async(email,password)=>{
    if(!email||!password){
      toast.error('All feilds are required')
      throw new Error('All feilds are required')
    }
   const loginData= {
  email,password
}

    try {
      const response =await fetchQueryAuth('users/login','POST',loginData)
   
       if (response.statusCode !== 200) {
        toast.error(response?response.message:response?.error)
        throw new Error(response);
      }
      toast.success('Login up Successful')
      localStorage.setItem('token',response.token)
      localStorage.setItem('userId',response.user._id)
      setUserData(response.user)
      return response;
    } catch (error) {
      console.error(error);
      return error
    } 
  },[]);


return {
    createBooking,
    createRoom,
    getAllBookings,
    getAllRooms,
    getUserData,
    signUp,
    login,
    updateRoom

}
}

export default useRequestResorce;
