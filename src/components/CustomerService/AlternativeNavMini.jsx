import { CustomerServiceNavItems } from '../utils/data'
import {NavLink} from 'react-router-dom'

const AlternativeNavMini = () => {
  return (
   <div className='w-full  flex md:hidden justify-around items-center gap-1 border-y-[1px] border-gray-color '>
    {
      CustomerServiceNavItems.map((item,i)=>(
        <NavLink key={i} to={`/customer_service/${item.path}`} className="text-[10px] py-4" >{item.alt}</NavLink>
      ))
    }
    </div>
  )
}

export default AlternativeNavMini