
import PageLayout from "../components/PageLayout"
import Footer from  "../components/Footer"
import {Toaster} from "react-hot-toast";
import { Outlet } from "react-router-dom";
const Rooms = () => {
  return (
    <PageLayout>
      <Toaster/>
     <Outlet/>
    <Footer/>
    </PageLayout>
  )
}

export default Rooms