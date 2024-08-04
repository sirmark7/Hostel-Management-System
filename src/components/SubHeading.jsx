
import { PropTypes } from 'prop-types'

const SubHeading = ({heading,text}) => {
  return (
    <div className=" w-[100%] pl-[0rem] md:w-[80%] lg:w-[70%] flex flex-col items-center md:items-start heading-text md:pl-[5rem]">
        <h2 className='uppercase mb-1 tracking-[10%] text-[20px]' >{heading}</h2>
        <h3 className='text-[18px] font-normal leading-[23px] text-left'>{text}</h3>
        </div>
  )
}
SubHeading.propTypes={
  heading:PropTypes.string,
  text:PropTypes.string
}
export default SubHeading