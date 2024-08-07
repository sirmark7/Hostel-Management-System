
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
        <Route path='customer_service' element={<CustomerServicePage/>}>
          <Route index element={<CustomerService/>} />
          <Route path= "faqs" element={<FAQs/>} />
          <Route path='contact_us' element={<ContactUs/>} />
          <Route path=':serviceId' element={<AboutPolicy/>} />

        </Route>
      </Routes>
    </AppContext>  
  )
}

export default App
