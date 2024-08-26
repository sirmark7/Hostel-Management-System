
import SummaryCards from "../SummaryCards";
import { cards } from "../../utils/data";
import { useOutletContext } from "react-router-dom";


const AdminDashboard = () => {
const{hostelData,allBooked,userList}=useOutletContext()
  const rooms =hostelData? [...hostelData]:[]
  const users =userList? [...userList]:[]
  const booking =allBooked? [...allBooked]:[]

  return (
    <div className="flex flex-col gap-4 w-full">
      <h1 className="font-bold text-3xl">Admin Dashboard</h1>
      <SummaryCards cards={cards(rooms,booking,users)} />
    </div>
  );
};

export default AdminDashboard;
