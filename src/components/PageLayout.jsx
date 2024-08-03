import { PropTypes } from 'prop-types'
import NavBar from './Navbar/NavBar'
import SideBar from './sidebar/SideBar'
import { useEffect } from 'react'
function PageLayout({children,title='MJ Hostels || Home'}) {

    useEffect(()=>{
        document.title=title
    },[])


  return (

      <div className='flex flex-col items-center justify-start p-[18px]'>
      <NavBar/>
      <div className='flex justify-start items-start gap-5 '>
      <SideBar/>
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