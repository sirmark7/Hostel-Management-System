
import { useOutletContext } from 'react-router-dom';
import Table from '../Table'
import { BiEdit, BiTrash } from 'react-icons/bi';

const RoomListingAdmin = () => {
  const{hostelData}=useOutletContext()
      const manageRoutes = [
          {
      label: "edit",
      name: "Edit",
      icon: <BiEdit />,
      href: "/admin/rooms",
    },
    {
      label: "delete",
      name: "Delete",
      icon: <BiTrash />,
      href: "/api/rooms",
    },
   
  ];
   const formattedRooms = hostelData?.map((o) => {
    return {
      ...o,
      status:o.available?'available':'fully booked'
    };
  });
  console.log(hostelData);
  
  return (
    <div>
        <Table
        columns={["id", "name", "occupancy","slot", "price","category","status"]}
        rows={formattedRooms}
        manageRoutes={manageRoutes}
        />
    </div>
  )
}

export default RoomListingAdmin