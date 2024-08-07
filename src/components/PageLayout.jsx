import { PropTypes } from 'prop-types'
import NavBar from './Navbar/NavBar'
// import SideBar from './Sidebar/SideBar'
import { useEffect } from 'react'
function PageLayout({children,title='MJ Hostels || Home'}) {


    useEffect(()=>{
        document.title=title;
         window.scrollTo(0, 0)
    },[])

  return (

      <div className=' w-full h-full flex flex-col items-center justify-start px-[18px] ' >
         <header
              className="w-full relative h-[10vh] flex flex-col justify-start"
              style={{ border: "1px soloid red" }}
            >
              <NavBar />
            </header>
        {/* <div className=' w-full max-w-[1512px] flex justify-start items-start gap-5 bg-black mt  '>
            <SideBar/>
            {children}
        </div> */}
        <div className=' w-full max-w-[1512px] flex flex-col justify-start items-start gap-5'>
            {children}
        </div>
      </div>
  )
}

PageLayout.propTypes={
  children:PropTypes.node,
  title:PropTypes.string,
}

export default PageLayout