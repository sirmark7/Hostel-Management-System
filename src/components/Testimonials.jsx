import {useEffect,useState} from 'react'

import TestimonialCard from './TestimonialCard'
import { testimonies } from './utils/data'
import Dots from './CarouselDots'

const Testimonials = () => {
     const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonies.length);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className='w-full bg-[#202020] flex justify-center py-2 items-center lg:h-[70vh] h-fit'>
        <div className=' h-[80%] text-center text-background-color flex flex-col items-center justify-start w-[80%] '>
            <h2 className='h-[100px] '>WHAT OUR CUSTOMERS SAY.</h2>
            <div className=' flex flex-col h-full w-full border-x-2 border-white'>
            {/* <span className='flex  w-full justify-center items-center text-[30px] '>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
            </span> */}
            {/* <Carousel  >
                {
                    testimonies.map((testimony,i)=>{
                      return (<div className="relative h-64 flex-[0_0_100%]" key={i}>
                        <TestimonialCard 
                        testimony={testimony.testimony} 
                        customer={testimony.customer} />
                        </div>)
                        })
                }
            </Carousel> */}
            <TestimonialCard 
            testimony={testimonies[currentIndex].testimony} 
            customer={testimonies[currentIndex].customer} />
    
            <Dots itemsLength={testimonies.length} selectedIndex={currentIndex} />
         
            </div>
        
        </div>
    </section>
  )
}

export default Testimonials