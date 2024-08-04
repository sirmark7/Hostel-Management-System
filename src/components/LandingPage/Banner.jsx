
import {NavLink} from 'react-router-dom'

const Banner = () => {
  return (
   <section className=" w-full banner mb:bg-center bg-right-top bg-no-repeat bg-cover flex-1 flex justify-start items-center min-h-[70vh] " style={{backgroundImage: `url('/banner.png')`, transform:''}}>
    <div className="banner-text pl-[3rem] md:pl-[5rem] h-full flex gap-16 flex-col justify-center items-start leading-9 ">
    <h1 className=' uppercase text text-background-color max-w-[455px] ' >Discover the Secret <br/> to finding the perfect Holstel with <br/> MJ Hostels</h1>
    <NavLink to='/shop'>
     <button className='btn btn-main'>SEARCH NOW</button>
    </NavLink>
    </div>
   </section>
  )
}

export default Banner