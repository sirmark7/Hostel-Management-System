import { useCallback, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { HostelsContext, LoaderContext } from '../../store/AppContext';
import toast from 'react-hot-toast';

const RoomDetailAdmin = () => {
        const { roomId } = useParams();
        const {setIsLoading}=useContext(LoaderContext)
        const {hostelData}=useContext(HostelsContext)
        const [room,setRoom]=useState()

         const handleGetroom =useCallback(async () => {
    setIsLoading(true);
    try {
      const response = hostelData.find((room)=>room._id === roomId );
      setRoom(response);
    } catch (error) {
      toast.error("Error loading room");
    } finally {
      setIsLoading(false);
    }
  },[])

  
  useEffect(() => {
    if (!room) {
      handleGetroom();
    }
  }, []);
  return (
    <div>
      {room&&room}
    </div>
  )
}

export default RoomDetailAdmin