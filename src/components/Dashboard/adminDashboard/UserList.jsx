
import { useOutletContext } from 'react-router-dom';
import Table from '../Table'
import { BiEdit, BiTrash } from 'react-icons/bi';

const UserListContext = () => {
    const{userList}=useOutletContext()
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
   const formattedUsers = userList?.map((o) => {
    return {
      ...o,
      name:o.fullName,
      number:o.phoneNumber
    };
  });
  return (
    <div>
        <Table
        columns={["id", "name", "email", "number","role",]}
        rows={formattedUsers}
        manageRoutes={manageRoutes}
        />
    </div>
  )
}

export default UserListContext