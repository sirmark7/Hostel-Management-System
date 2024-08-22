
import PageLayout from "../components/PageLayout"
import Footer from  "../components/Footer"
import { Outlet } from "react-router-dom";
import { useContext} from "react";

import { FilterContext } from "../components/store/AppContext";
const Rooms = () => {
  // const {getAllRooms}=useRequestResorce()
  // const {setHosteldata}=useContext(HostelsContext)
    const {filteredData}=useContext(FilterContext)
//  useEffect(()=>{
//   async()=> {
//     await getAllRooms()
//   .then((res)=>setHosteldata(res.data))

//  }},[])
  return (
    <PageLayout title="Hostels">
     <Outlet context={{filteredData}} />
    <Footer/>
    </PageLayout>
  )
}

export default Rooms