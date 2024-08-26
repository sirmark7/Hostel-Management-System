
import { Outlet } from "react-router-dom"

import AdminNavbar from "./AdminNavbar"
import { useContext, } from "react"
import { AllBookingsContext,HostelsContext, UserListContext } from "../../store/AppContext"

const AdminDashboardLayout = () => {
const {hostelData}=useContext(HostelsContext)
const {allBooked}=useContext(AllBookingsContext)
const {userList}=useContext(UserListContext)

  return ( <div className="max-w-[1512px] m-auto pt-10">
              <header
              className="w-full relative h-[10vh] flex flex-col justify-start"
              style={{ border: "1px soloid red" }}
              >
                <AdminNavbar/>
              </header>
              <section className="max-w-[1512px]">
                 {/* <SideNav navItems={navItems} linkPreFix='/dashboard' icons={icons} />   */}
                <div className="text-black w-full relative h-full ">
                <Outlet context={{hostelData,allBooked,userList}}/>
                </div>
              </section>
          </div>
  )
}

export default AdminDashboardLayout