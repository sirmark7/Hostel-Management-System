import RoomInfoCard from './RoomInfoCard'
const RoomInfo = () => {
    const styles={
        cardStyles:'md:min-w-[50%] md:h-[244px] w-full h-[344px] ',
        pictureStyles:'md:min-w-[208px] md:min-h-[284px] min-w-[108px] min-h-[384px] ',
        containerStyles:'top-5',
        textStyles:'apsolute top-0 left-0 z-10'
    }
  return (
    <section className='w-full md:flex-wrap lg:flex-nowrap flex flex-col lg:flex-row justify-center h-full items-center gap-12 md:gap-10 :min-h-fit' >
        <RoomInfoCard 
        heading='MADE FROM THE FINEST HERBS.' 
        description='OUR PRODUCTS OFFER A NATURAL SOLUTION FOR HEALTHY AND RADIANT SKIN.' 
        image='category-scrubs.png'
        pictureStyles={styles.pictureStyles}
        cardStyles={styles.cardStyles}
        btnText='shop scrubs'
        containerStyles={styles.containerStyles}
        textStyles={styles.textStyles}
        />
        <RoomInfoCard 
        heading='UNLOCK THE POWER OF NATURE WITH SAHARA BATH & SCRUB' 
        description='EXPLORE OUR RANGE OF BODY WASH AND SOAPS.' 
        image='category-body_wash.png'
        cardStyles={styles.cardStyles}
        pictureStyles={styles.pictureStyles}
        containerStyles={styles.containerStyles}
        btnText='shop body wash'
        textStyles={styles.textStyles}
        />
        
    </section>
  )
}

export default RoomInfo