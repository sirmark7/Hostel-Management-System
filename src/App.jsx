
import {Routes, Route} from'react-router-dom'
import LandingPage from './pages/LandingPage'
import Rooms from './pages/Rooms'
import AppContext from './components/store/AppContext'
function App() {

    return (
    <AppContext>
      <Routes>  
        <Route path='/' element={<LandingPage/>} />
        <Route path='/hostels' element={<Rooms/>} />
      </Routes>
    </AppContext>  
  )
}

export default App
