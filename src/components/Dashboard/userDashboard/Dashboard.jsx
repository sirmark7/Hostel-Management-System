import DashboardLayout from "../DashboardLayout"
import NavBar from "../../Navbar/NavBar"
import SideNav from "../../Sidebar/SideNav"
import { FaBookBookmark,FaBookOpen  } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { Outlet } from "react-router-dom";
const Dashboard = () => {
  // const path =useLocation().pathname
  const navItems=[
    { name:'Dashboard', path:'' },
    { name:'Booking', path:'/booking' },
    { name:'Profile', path:'/profile' },
    { name:'Settings', path:'/settings' },
  ]
const icons=[
<FaHome key={0} className="font-bold text-[20px] " />,
<FaBookBookmark key={1} className="font-bold text-[20px]" />
,<FaBookOpen key={2} className="font-bold text-[20px]"/>
, <IoMdSettings key={3} className="font-bold text-[20px]" />]

  return (
    <DashboardLayout>
        <NavBar dasboard={true}/>
      <div className=" max-w-[1512px] flex w-screen justify-startitems-start mt-[76px] relative overflow-hidden h-full">
       <SideNav navItems={navItems} linkPreFix='/dashboard' icons={icons} />
       
        <div className="flex-1 h-screen overflow-y-auto">
          <Outlet/>
        </div>
      </div>
        

    </DashboardLayout>
  )
}

export default Dashboard