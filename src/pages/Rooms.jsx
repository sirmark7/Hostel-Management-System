import RoomsLayout from "../components/Room/RoomsLayout"
import RoomList from "../components/Room/RoomList"
import PageLayout from "../components/PageLayout"
import Footer from  "../components/Footer"
import {Toaster} from "react-hot-toast";
const Rooms = () => {
  return (
    <PageLayout>
      <Toaster/>
     <RoomsLayout>
       <RoomList/>
    </RoomsLayout>
    <Footer/>
    </PageLayout>
  )
}

export default Rooms