

import { Outlet } from "react-router-dom";
import PageLayout from "../../PageLayout";

import { useContext} from "react";
import { BookedContext} from "../../store/AppContext";

const Dashboard = () => {

const {booked}=useContext(BookedContext)


  return (
        <PageLayout title="Dashboard">
            <div className="text-black w-full relative h-full ">
                <Outlet context={{booked}} />
            </div>
        </PageLayout>
  );
};

export default Dashboard;
