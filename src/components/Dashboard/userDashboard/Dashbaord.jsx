

import { Outlet } from "react-router-dom";
import PageLayout from "../../PageLayout";

const Dashboard = () => {

  return (
        <PageLayout title="Dashboard">
            <div className="text-black w-full relative h-full ">
                <Outlet/>
            </div>
        </PageLayout>
  );
};

export default Dashboard;
