
import {Routes, Route} from'react-router-dom'
import LandingPage from './pages/LandingPage'
import Rooms from './pages/Rooms'
import AppContext from './components/store/AppContext'
import RoomDetail from './components/Room/RoomDetail'
import RoomList from './components/Room/RoomList'
function App() {

    return (
    <AppContext>
      <Routes>  
        <Route path='/' element={<LandingPage/>} />
        <Route path='hostels' element={<Rooms/>} >
          <Route index element={<RoomList/>} />
          <Route path=':roomId' element={<RoomDetail/>} />
        </Route>
      </Routes>
    </AppContext>  
  )
}

export default App
