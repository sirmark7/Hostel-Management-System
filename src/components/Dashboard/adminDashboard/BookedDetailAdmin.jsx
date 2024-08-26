import { useCallback, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { HostelsContext, LoaderContext } from '../../store/AppContext';
import toast from 'react-hot-toast';

const BookedDetailAdmin = () => {
        const { bookingId } = useParams();
        const {setIsLoading}=useContext(LoaderContext)
        const {hostelData}=useContext(HostelsContext)
        const [booking,setBooking]=useState()

         const handleGetbooking =useCallback(async () => {
    setIsLoading(true);
    try {
      const response = hostelData.find((booking)=>booking._id === bookingId );
      setBooking(response);
    } catch (error) {
      toast.error("Error loading booking");
    } finally {
      setIsLoading(false);
    }
  },[])

  
  useEffect(() => {
    if (!booking) {
      handleGetbooking();
    }
  }, []);
  return (
    <div>
      {booking&&booking}
    </div>
  )
}

export default BookedDetailAdmin