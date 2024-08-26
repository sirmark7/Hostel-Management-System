
import { useContext, useEffect } from 'react'
import BookedList from '../../BookedList'
import useRequestResorce from '../../store/useRequestresource'
import { BookedContext, LoaderContext } from '../../store/AppContext'
import toast from 'react-hot-toast'
import { useOutletContext } from 'react-router-dom'

const Bookings = () => {

  const {getBookings}=useRequestResorce()
  const {booked}=useContext(BookedContext)
  const {setIsLoading}=useContext(LoaderContext)
  // const {booked}=useOutletContext()
  const getBookedRooms=async()=>{
      setIsLoading(true)
      await getBookings()
      .then((res)=>
      {
        if(res?.statusCode!== 200 ){
          toast.error(res.error) }
        setIsLoading(false) })}

  useEffect(()=>{
    getBookedRooms()
  },[])

  
  return (
    <BookedList bookedItems={booked&&booked}/>
  )
}

export default Bookings