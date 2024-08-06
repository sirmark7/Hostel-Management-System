import { allReviews } from './utils/data'
import { AiFillStar, AiOutlineStar ,  AiOutlineUser} from 'react-icons/ai'


const RatingReviewCard = () => {
  return (
    <>
            {
            allReviews?.map((review,i)=>(
       
            <div key={i} className='flex flex-col w-full  mt-3 justify-start items-start'>
                <div className='flex w-full justify-start items-center gap-5'>
                    {/* <img className='flex rounded-full' src={`/rooms/${review.image}`} alt={review.image}   height={20} width={20} /> */}
                    <AiOutlineUser className='h-5 w-5'/>
                <span>
                <p className='text-[14px]'>{review.name}</p>
                <p className='text-[12px] p-0'>{review.timeStamp}</p>
                </span>
                </div>   

                <ol className="rating mt-1 flex">

                    <AiFillStar className=' text-btn-bg '/>
                    <AiFillStar className=' text-btn-bg '/>
                    <AiFillStar className=' text-btn-bg '/>
                    <AiFillStar className=' text-btn-bg '/>
                    <AiOutlineStar className='text-gray-color'/>
                </ol>    

                <div className=''>
                    <p className='uppercase  py-2 text-[14px]'>{review.title}</p>
                    <p className='text-[12px] leading-[15px]'>{review.review}</p>
                </div>  

            </div>
            ))
          }
        </>
  )
}

export default RatingReviewCard