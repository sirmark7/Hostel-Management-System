
import RoomInfoCard from '../RoomInfoCard'

const ExploreSection = () => {
  return (
    <section className=' w-full'>
      <RoomInfoCard 
      btnText={`LET’S GO BOOKING`}
      description="Uncover the best our hostels have to offer. From vibrant communal spaces to serene private rooms, there's something for everyone. Enjoy top-notch amenities, including free WiFi, breakfast, and more."
      heading='EXPLORE MORE OPTIONS'
      cardStyles='w-full h-[444px]  '
      pictureStyles='min-w-[308px] min-h-[200px] bg-contain bg-no-repeat  md:min-h-[484px]  '
      containerStyles='top-0 flex-col md:flex-row'
      textStyles=''
      image='banner1.png' />

    </section>
  )
}

export default ExploreSection