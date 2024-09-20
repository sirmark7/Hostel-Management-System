import { useCallback, useContext } from "react";
import { fetchQuery, fetchQueryAuth, } from "./fetchFuction";
import {HostelsContext,UserContext,BookedContext} from "./AppContext";
import toast from "react-hot-toast";


const useRequestResorce=()=>{
    const {hostelData,setHostelData}=useContext(HostelsContext)
    const {booked,setBooked}=useContext(BookedContext)
    const {setUserData}=useContext(UserContext)
    // const {setAllBooked}=useContext(AllBookingsContext)


    const token = localStorage.getItem('token');
    // const userId = localStorage.getItem('userId');


//create new deal
const createRoom = useCallback(async (formData) => {
  const {name,price,oldPrice, hostel,location,slot, occupancy, stars, category,description,facilities,images}=formData
  formData.oldPrice=price
  try {
          if(!name && !price &&! hostel && !location && !slot && !occupancy &&  !stars &&!category && !description && !facilities && !images){ 
         toast.error('Please fill in all fields')
         throw new Error('Ensure all fields are provided')
      }
  console.log(formData);
     
   
      
        const newRoomData = new FormData();
      newRoomData.append("name",name)
      newRoomData.append("price",price)
      newRoomData.append("oldPrice",oldPrice)
      newRoomData.append("hostel",hostel)
      newRoomData.append("location",location)
      newRoomData.append("slot",slot)
      newRoomData.append("occupancy",occupancy)
      newRoomData.append("stars",[stars])
      newRoomData.append("category",category)
      newRoomData.append("description",description)
      newRoomData.append("facilities",facilities)
      newRoomData.append("images",images)
           

 for (var pair of newRoomData.entries()) {
    console.log(pair[0]+ ', ' + pair[1]); 
}
        const response = await fetch('http://localhost:5000/api/rooms', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`, // Set only the Authorization header
        },
        body: newRoomData, // Set the body as FormData
    });
    const result = await response.json();
  if (result.statusCode !== 200) {
  toast.success('Error')
  console.log(result);
  
    
    throw new Error(result);
  }
  // setHostelData([...hostelData,response.data])
  toast.success('Room Created Successfully')
  return result
  } catch (error) {
    console.log(error);
    
  }
  

},[])



// get user data
  const getUserData = useCallback(async () => {
    try {
      const response = await fetchQuery(`users/profile`, token);
      if (response.statusCode !== 200) {
        throw new Error(response.message);
      }
      
      // localStorage.setItem('userId', response.data._id);
      setUserData(response.data);
         console.log(response);
         
    } catch (error) {
      console.error(error);
    } 
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

// get Bookind on test
  const getBookings = useCallback(async () => {
    try {
      const response = await  fetchQuery(`bookings`, token)

       if (response.statusCode !== 200) {
        toast.error(response?.error)
        throw new Error(response);
      }
      setBooked(response.data)
      return response
    } catch (error) {
      console.error(error);
    }
  }, []);
  
  const getAllBookings = useCallback(async () => {
    try {
      const response = await  fetchQuery(`bookings/admin`, token)

       if (response.statusCode !== 200) {
        toast.error(response?.error)
        throw new Error(response);
      }

      // setAllBooked(response.data)
      return response
    } catch (error) {
      console.error(error);
    }
  }, []);

// create booking - working
  const createBooking = useCallback(async (roomId,slot) => {
    const bookingData={ roomId,slot}
    console.log(bookingData);
    
    try {
      const response = await  fetchQuery(`bookings`, token, 'POST',bookingData )

     if (response.statusCode !== 201) {
        toast.error(response.error)
        throw new Error(response);
      }
        // setBooked([...booked,response.data])
        return response
    } catch (error) {
      console.error(error);
    }
  }, []);


  const createUserBooking = useCallback(async (bookingData) => {
    if(!bookingData.userId||!bookingData.roomId){
      toast.error('data not valid')
        throw new Error('invalide datata');
    }
    console.log(bookingData);
    
    try {
      const response = await  fetchQuery(`bookings/user`, token, 'POST',bookingData )

     if (response.statusCode !== 201) {
        toast.error(response.error)
        throw new Error(response);
      }
         toast.success('Booking Created Successfully')
        return response
    } catch (error) {
      console.error(error);
    }
  }, []);

   const updateBooking = useCallback(async (bookingData) => {
    if(!bookingData){
      toast.error('data not valid')
        throw new Error('invalide datata');
    }
    console.log(bookingData);
    
    try {
      const response = await  fetchQuery(`bookings/${bookingData.bookingId}`, token, 'PUT',bookingData )

     if (response.statusCode !== 200) {
        toast.error(response.error)
        throw new Error(response);
      }
       toast.success('Booking updated')
        return response
    } catch (error) {
      console.error(error);
    }
  }, []);
  // get Users - working
  const getAllUsers = useCallback(async () => {
    const response = await fetchQuery(`users/all/profile`, token);
   if (response.statusCode !== 200) {
        toast.error(response.error)
        throw new Error(response);
      }
      // setUserList(response.data)
    return response
  
  }, []);


 const cancleBooking = useCallback(async (roomId) => {
    
    try {
      const response = await  fetchQuery(`bookings/${roomId}`, token,'DELETE')

     if (response.statusCode !== 200) {
        toast.error(response.error)
        throw new Error(response);
      }
     console.log('cancle',response);
      const result=booked.filter((room)=>room.room._id !==response?.data?.room._id)
      console.log(result);
      
      setBooked(result)
        return response
    } catch (error) {
      console.error(error);
    }
  }, []);


// get Rooms - working
  const getAllRooms = useCallback(async () => {
    const response = await fetchQuery(`rooms`, token);
   if (response.statusCode !== 200) {
        toast.error(response.error)
        throw new Error(response);
      }
        // toast.success('Signup up Successful')
    return response
  
  }, []);

// signup - working
  const signUp=useCallback(async(body)=>{
    if(!body.fullName||!body.email||!body.phoneNumber||!body.password||!body.role){
      toast.error('All feilds are required')
      throw new Error('All feilds are required')
    }

   const{ fullName,email,phoneNumber,password,role}=body
   const singUpData= { fullName,email,phoneNumber,password,role}

    try {
   
      const response =await fetchQueryAuth('users/register','POST',singUpData)
   
      if (response.statusCode !== 201) {
        toast.error(response.error)
        throw new Error(response);
      }
      toast.success('Signup up Successful')
      return response
    } catch (error) {
      console.error(error);
    } 
    
  },[]);

  // updateuser - working
  const updateUser=useCallback(async(body,id)=>{
    console.log(body);
    
    if(!id||!body){
      toast.error('All feilds are required')
      throw new Error('All feilds are required')
    }

    try {
   
      const response =await fetchQuery('users/profile/'+id,token,'PUT',body)
   
      if (response.statusCode !== 200) {
        toast.error(response.error)
        throw new Error(response);
      }
      toast.success(' update Successful')
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
        toast.error(response.error)
        throw new Error(response);
      }
      toast.success('Login up Successful')
      localStorage.setItem('token',response.token)
      localStorage.setItem('userId',response.user._id)
      localStorage.setItem('role',response.user.role)
      setUserData(response.user)
      return response;
    } catch (error) {
      console.error(error);
      return error
    } 
  },[]);


 const deleteUser=useCallback(async(user)=>{
    if(!user){
      toast.error('All feilds are required')
      throw new Error('All feilds are required')
    }

    try {
   
      const response =await fetchQuery(`users/profile/${user}`,token,'DELETE')
   
      if (response.statusCode !== 200) {
        toast.error(response.error)
        throw new Error(response);
      }
      toast.success(' delete Successful')
      return response
    } catch (error) {
      console.error(error);
    } 
    
  },[]);

   const deleteRoom=useCallback(async(room)=>{
    if(!room){
      toast.error('All feilds are required')
      throw new Error('All feilds are required')
    }

    try {
   
      const response =await fetchQuery(`rooms/${room}`,token,'DELETE')
   
      if (response.statusCode !== 200) {
        toast.error(response.error)
        throw new Error(response);
      }
      toast.success(' delete Successful')
      return response
    } catch (error) {
      console.error(error);
    } 
    
  },[]);

   const deleteBooking=useCallback(async(booking)=>{
    if(!booking._id){
      toast.error('All feilds are required')
      throw new Error('All feilds are required')
    }

    try {
   
      const response =await fetchQuery(`bookings/${booking._id}`,token,'DELETE',{
        slots:booking.room.slot})
   
      if (response.statusCode !== 200) {
        toast.error(response.error)
        throw new Error(response);
      }
      toast.success(' delete Successful')
      return response
    } catch (error) {
      console.error(error);
    } 
    
  },[]);

  const generateReport = async (startDate, endDate) => {
    try {
      if(!startDate||!endDate){
        toast.error('All feilds are required')
        throw new Error('All feilds are required')
      }
      const response = await fetchQuery(`bookings/report?start=${startDate}&end=${endDate}`,token);
      return response// Set the bookings data to display the report
    } catch (error) {
      console.error('Error generating report:', error);
    }
  };
return {
    createBooking,
    createUserBooking,
    generateReport,
    updateBooking,
    createRoom,
    getBookings,
    getAllRooms,
    signUp,
    updateUser,
    deleteUser,
    login,
    updateRoom,
    deleteRoom,
    cancleBooking,
    deleteBooking,
    getAllUsers,
    getAllBookings,
    getUserData

}
}

export default useRequestResorce;
