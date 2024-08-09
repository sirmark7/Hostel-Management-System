import prismadb from "@/src/lib/prismadb";
import SummaryCards from "./components/SummaryCards";
import { cards } from "@/src/data";

const AdminDashboard = async () => {
  const categories = await prismadb.category.findMany();
  const items = await prismadb.item.findMany();

  return (
    <div className="flex flex-col gap-4 w-full">
      <h1 className="font-bold text-3xl">Admin Dashboard</h1>
      <SummaryCards cards={cards(categories, items)} />
    </div>
  );
};

export default AdminDashboard;
