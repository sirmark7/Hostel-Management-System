
import { useOutletContext } from 'react-router-dom';
import Table from '../Table'
import { BiEdit, BiPlus, BiTrash } from 'react-icons/bi';
import ButtonAdmin from '../../ButtonAdmin';

const UserListContext = () => {
    const{userList,handleModal}=useOutletContext()
      const manageRoutes = [
          {
      label: "edit",
      name: "Edit",
      icon: <BiEdit />,
      href: "User",
    },
    {
      label: "delete",
      name: "Delete",
      icon: <BiTrash />,
      href: "User",
    },
   
  ];
   const formattedUsers = userList?.map((o) => {
    return {
      ...o,
      name:o.fullName,
      number:o.phoneNumber
    };
  });
  return (
    <div>
         <span className='flex w-full  justify-end pb-4' >
     
       <ButtonAdmin styles='flex justify-center gap-2 p-2' onClick={()=>handleModal(true,'User')} type='button'>
         <BiPlus className='text-2xl text-main-color'/>
         Add User
       </ButtonAdmin>
      </span> 
        <Table
        columns={["id", "name", "email", "number","role",]}
        rows={formattedUsers}
        manageRoutes={manageRoutes}
        />
    </div>
  )
}

export default UserListContext