
import {Routes, Route} from'react-router-dom'
import LandingPage from './pages/LandingPage'
import Rooms from './pages/Rooms'
import AppContext from './components/store/AppContext'
import RoomDetail from './components/Room/RoomDetail'
import RoomList from './components/Room/RoomList'
import AuthLayout from './components/Auth/AuthLayout'
import CustomerServicePage from './pages/CustomerServicePage'
import {Toaster} from "react-hot-toast";
import CustomerService from './components/CustomerService'
import FAQs from './pages/FAQs'
import ContactUs from './pages/ContactUs'
import AboutPolicy from './pages/AboutPolicy'
import Wishlist from './pages/Wishlist'
// import Dashboard from './components/Dashboard/userDashboard/Dashboard'
import RoomListing from './components/Dashboard/userDashboard/RoomListing'
import ProtectedRoute from './components/ProtectedRoute'
import Dashboard from './components/Dashboard/userDashboard/Dashbaord'
import { ErrorPage } from './pages/ErrorPage'
import WishlistItems from './components/WishlistItems'
import Profile from './components/Dashboard/Profile'
import Bookings from './components/Dashboard/Bookings'
// import PageLayout from './components/PageLayout'
// import DashboardLayout from './components/Dashboard/DashboardLayout'

function App() {

    return (
    <AppContext>
      <Toaster/>
      <Routes>  
        <Route path='/' element={<LandingPage/>} />
        
        <Route path='auth' element={<AuthLayout/>}/>
        <Route path='hostels' element={<Rooms/>} >
          <Route index element={<RoomList/>} />
          <Route path=':roomId' element={<RoomDetail/>} />
        </Route>
        <Route path='wishlist' element={<Wishlist/>} />
        <Route path='customer_service' element={<CustomerServicePage/>}>
          <Route index element={<CustomerService/>} />
          <Route path= "faqs" element={<FAQs/>} />
          <Route path='contact_us' element={<ContactUs/>} />
          <Route path=':serviceId' element={<AboutPolicy/>} />
        </Route>
        <Route element={<ProtectedRoute/>}>
        <Route exact path='dashboard' element={<Dashboard/>}>
            <Route index element={<RoomListing/>} />
             <Route path='book/:roomId' element={<RoomDetail/>} />
             <Route path='wishlist' element={<WishlistItems/>} />
             <Route path='profile' element={<Profile/>}/>  
             <Route path='booking' element={<Bookings/>}/>                   
        </Route>
        </Route>
         <Route path="*" element ={<ErrorPage/>} />
      </Routes>
    </AppContext>  
  )
}

export default App
