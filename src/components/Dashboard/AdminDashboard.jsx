
import SummaryCards from "./SummaryCards";
import { cards } from "../utils/data";

const AdminDashboard = () => {
  // const categories = []
  // const items = []

  return (
    <div className="flex flex-col gap-4 w-full">
      <h1 className="font-bold text-3xl">Admin Dashboard</h1>
      <SummaryCards cards={cards} />
    </div>
  );
};

export default AdminDashboard;
