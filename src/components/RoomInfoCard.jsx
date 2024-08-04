import { PropTypes } from 'prop-types'


const RoomInfoCard = (
  {containerStyles,textStyles,pictureStyles,cardStyles,image,description,heading,btnText}
  ) => {
  return (
    <div className={`flex relative  ${cardStyles} bg-[#F2E3D8]  justify-start items-center`}>
        <div className={`flex gap-5 justify-between w-[96%] absolute ${containerStyles} bg-none left-1/2 -translate-x-1/2`}>
      
            <div className={`flex  mb:relative flex-col gap-1 justify-center mb-[3rem] items-center p-3 ${textStyles} `}>
                <div className="text-container flex flex-col justify-center items-start ">
                <h2 className="uppercase text-[14px] lg:text-[16px] mb-2">{heading}</h2>
                <h3 className="uppercase font-normal text-[12px] lg:text-[14px] text-text-color-trans">{description}</h3>
                <button className="uppercase mt-[3rem] btn btn-cart-alt text-[14px] ">{btnText}</button>
                </div>
            </div>
            <div className={` bg-cover bg-center ${pictureStyles}`}  style={{backgroundImage:`URL(/${image})`}} >
                
            </div>
        
        </div>
    </div>
  )
}

RoomInfoCard.propTypes={
  containerStyles:PropTypes.string,
  textStyles:PropTypes.string,
  pictureStyles:PropTypes.string,
  cardStyles:PropTypes.string,
  image:PropTypes.string,
  description:PropTypes.string,
  heading:PropTypes.string,
  btnText:PropTypes.string
}

export default RoomInfoCard