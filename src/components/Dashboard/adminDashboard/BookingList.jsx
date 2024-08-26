
import { useOutletContext } from 'react-router-dom';
import Table from '../Table'
import { BiEdit, BiTrash } from 'react-icons/bi';

const BookingList= () => {
     const{allBooked}=useOutletContext()
      const manageRoutes = [
          {
      label: "edit",
      name: "Edit",
      icon: <BiEdit />,
      href: "/admin/bookings",
    },
    {
      label: "delete",
      name: "Delete",
      icon: <BiTrash />,
      href: "/api/bookings",
    },
   
  ];
   const formattedBookings = allBooked?.map((o) => {
    return {
      ...o,
      date:o.bookingDate?o.bookingDate.split('T')[0]:'',
      name:o.user.fullName,
      number:o.user.phoneNumber,
      email:o.user.email,
      room:o.room.name,
      category:o.room.category
    };
  });
  return (
    <div>
        <Table
        columns={["id", "name", "number", "email","room","category", "status","date"]}
        rows={formattedBookings}
        manageRoutes={manageRoutes}
        />
    </div>
  )
}

export default BookingList
