import React from 'react'
import { Testimony } from '@/src/interfaces'
import { AiFillStar } from 'react-icons/ai'
const TestimonialCard = ({testimony,customer}:Testimony) => {
  return (
    <div className='text-white flex flex-col justify-center mb-5 items-center h-full w-full '  >
        <span className='flex  w-full justify-center items-center text-[30px] '>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
        </span>
        <p className=' transition-all duration-75 mt-5 text-[20px] sm:w-4/5  lg:w-1/2'><q>{testimony}</q></p>
        <h3 className=' transition-all duration-75 mt-5 flex items-center'> <span className=' inline-block h-[3px] bg-background-color w-[15px]'></span>{customer}</h3>
    </div>
  )
}

export default TestimonialCard