import {useState} from 'react'
import {PropTypes} from 'prop-types'
const DropDown = ({title,children}) => {

  const [activeFilter,setActiveFilter]=useState(false)
  return (
    <details className='w-[full] flex flex-col justify-start border-t-[1px] py-2 border-text-color-trans items-start '>
        <summary onClick={()=>setActiveFilter(prev=>!prev)} className='w-full font-[500] cursor-pointer flex justify-between items-center text-[14px] uppercase '>{title} <span className='flex pr-3 '>{activeFilter?'-':'+'}</span></summary>
        <div className=' flex flex-col justify-start mt-5 gap-2 items-start'>

        {
            children
        }
        </div>

    </details>
  )
}
DropDown.propTypes = {
  title:PropTypes.string,
  children:PropTypes.node
}

export default DropDown