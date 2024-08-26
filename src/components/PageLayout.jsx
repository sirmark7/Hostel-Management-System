import { PropTypes } from 'prop-types'
import NavBar from './Navbar/NavBar'
// import SideBar from './Sidebar/SideBar'
import { useContext, useEffect} from 'react'
import { AuthContext } from './store/AppContext'
import SideNav from './sidebar/SideNav'
import { FaBookBookmark,FaBookOpen  } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
function PageLayout({children,title='Home'}) {
      const {isLogged}=useContext(AuthContext)

      const navItems=[
    { name:'Dashboard', path:'' },
    { name:'Booking', path:'/booking' },
    { name:'Profile', path:'/profile' }
  ]
const icons=[
<FaHome key={0} className="font-bold text-[20px] " />,
<FaBookBookmark key={1} className="font-bold text-[20px]" />
,<FaBookOpen key={2} className="font-bold text-[20px]"/>]

    useEffect(()=>{
        document.title= `MJ Hostels || ${title}`;
         window.scrollTo(0, 0)
    },[])
    
  
  return (
      <>
      <div className='  relative w-full h-[900px] flex flex-col items-center overflow-y-hidden justify-start ' >
         <header
              className="w-full relative h-[10vh] flex flex-col justify-start"
              style={{ border: "1px soloid red" }}
            >
              <NavBar dashboard={isLogged} />
            </header>

       {isLogged? 
       <div className=" max-w-[1512px] flex w-full justify-start items-start relative overflow-hidden h-full">
       <SideNav navItems={navItems} linkPreFix='/dashboard' icons={icons} />
       
        <div className="flex-1 w-full h-screen overflow-y-auto overflow-x-hidden p-2 ">
          {children}
        </div>
        </div>
        :
        <div className='  max-w-[1512px] w-full flex flex-col gap-14 justify-start items-center  h-screen overflow-y-auto scrollbar-hide'>
            {children}
        </div>}
      </div>
      </>
  )
}

PageLayout.propTypes={
  children:PropTypes.node,
  title:PropTypes.string,
}

export default PageLayout