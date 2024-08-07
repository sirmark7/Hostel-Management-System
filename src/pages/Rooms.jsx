
import PageLayout from "../components/PageLayout"
import Footer from  "../components/Footer"
import { Outlet } from "react-router-dom";
const Rooms = () => {
  return (
    <PageLayout>
     <Outlet/>
    <Footer/>
    </PageLayout>
  )
}

export default Rooms