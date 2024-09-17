
import { useOutletContext } from 'react-router-dom';
import Table from '../Table'
import { BiEdit, BiTrash,BiPlus } from 'react-icons/bi';
import ButtonAdmin from '../../ButtonAdmin';
// import { PropTypes } from "prop-types";

const RoomListingAdmin = () => {
const {handleModal}=useOutletContext()
  const{hostelData}=useOutletContext()
      const manageRoutes = [
          {
      label: "edit",
      name: "Edit",
      icon: <BiEdit />,
      href: "Room",
    },
    {
      label: "delete",
      name: "Delete",
      icon: <BiTrash />,
      href: "Room",
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
     <span className='flex w-full  justify-end pb-4' >
     
       <ButtonAdmin styles='flex justify-center gap-2 p-2' onClick={()=>handleModal(true,'Room')} type='button'>
         <BiPlus className='text-2xl text-main-color'/>
         Add Room
       </ButtonAdmin>
      </span> 
        <Table
        columns={["id", "name", "occupancy","slot", "price","category","status"]}
        rows={formattedRooms}
        manageRoutes={manageRoutes}
        />
    </div>
  )
}
// RoomListingAdmin.propTypes={
//   handleModal:PropTypes.func
// }
export default RoomListingAdmin