
import { useOutletContext } from 'react-router-dom';
import Table from '../Table'
import { BiEdit, BiPlus, BiTrash } from 'react-icons/bi';
import ButtonAdmin from '../../ButtonAdmin';

const BookingList= () => {

     const{allBooked,handleModal}=useOutletContext()
      const manageRoutes = [
          {
      label: "edit",
      name: "Edit",
      icon: <BiEdit />,
      href: "Booking",
    },
    {
      label: "delete",
      name: "Delete",
      icon: <BiTrash />,
      href: "Booking",
    },
   
  ];
   const formattedBookings = allBooked?.map((o) => {
    return {
      ...o,
      date:o.bookingDate?o.bookingDate.split('T')[0]:'',
      name:o.user.fullName,
      number:o.user.phoneNumber,
      email:o.user.email,
      roomName:o.room.name,
      category:o.room.category,

    };
  });
  return (
    <div>
         <span className='flex w-full  justify-end pb-4' >
     
       <ButtonAdmin styles='flex justify-center gap-2 p-2' onClick={()=>handleModal(true,'Booking')} type='button'>
         <BiPlus className='text-2xl text-main-color'/>
         Add Booking
       </ButtonAdmin>
      </span> 
        <Table
        columns={["id", "name", "number", "email","roomName","category", "status","date"]}
        rows={formattedBookings}
        manageRoutes={manageRoutes}
        />
    </div>
  )
}

export default BookingList
