import { AiOutlineClose } from 'react-icons/ai'
import { PropTypes } from 'prop-types'
const ModalCard= (
  {isActive,handleIsActive,children,heading}
  ) => {
  return (
    <>
    <div className={` images-display w-full bg-[#f1f1f1] md:max-w-[600px] fixed top-[55%] left-1/2 -translate-y-1/2 -translate-x-1/2 z-10 h-[80vh] overflow-y-hidden ${isActive?'flex':'hidden' } flex-col justify-start gap-5 max-w-[90%] items-start p-5`}>
         <div className='flex py-2 justify-between w-full border-b-[1px] border-text-color-trans'>
            <h1 className='text-[16px]'>{heading}</h1>
            <AiOutlineClose className='text-[18px] cursor-pointer ' onClick={handleIsActive}/>
         </div>

       
          <div className='max-h-[80%] overflow-y-auto'>

           {children}
        </div>

         </div> 
    <span className={`overlay ${isActive?'active':''}` }></span>
        </>
  )
}
ModalCard.propTypes={
  isActive:PropTypes.boolean,
handleIsActive:PropTypes.function,
children:PropTypes.node,
heading:PropTypes.string
}
export default ModalCard