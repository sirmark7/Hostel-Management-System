

import { Outlet } from "react-router-dom";
import PageLayout from "../../PageLayout";
import useRequestResorce from "../../store/useRequestresource";
import { useContext, useEffect } from "react";
import { BookedContext, UserContext } from "../../store/AppContext";

const Dashboard = () => {
const {getBookings,getUserData}=useRequestResorce()
const {setUserData}=useContext(UserContext)
const {setBooked}=useContext(BookedContext)

useEffect(()=>{
 async()=>{await Promise.all([getBookings,getUserData])
  .then((res)=>{
    setBooked(res[0].data)
    setUserData(res[0].data)
  })}

},[])
  return (
        <PageLayout title="Dashboard">
            <div className="text-black w-full relative h-full ">
                <Outlet />
            </div>
        </PageLayout>
  );
};

export default Dashboard;
