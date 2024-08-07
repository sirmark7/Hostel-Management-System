
import {useState}from 'react'
import { PropTypes } from 'prop-types'

const FaqCard = ({title,children}) => {
    const [active,setActive]=useState(false)
  return (
    <div className='w-[100%] flex flex-col justify-start items-start'>
        {/* <h2>{heading}</h2> */}
        <details className='w-full flex flex-col justify-start border-y-[1px] py-2 border-gray-color-trans items-start '>
            <summary onClick={()=>setActive(prev=>!prev)} className='w-full font-[500] cursor-pointer flex justify-between items-center text-[14px] uppercase '>{title} <span className='flex pr-3 '>{active?'-':'+'}</span></summary>
            <div className=' flex flex-col justify-start mt-5 gap-2 items-start'>
             {  children   }
            </div>
    </details>
    </div>

  )
}

FaqCard.propTypes={
    title:PropTypes.string,
    children:PropTypes.node
}

export default FaqCard