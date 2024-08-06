import PageLayout from "../components/PageLayout"
import Banner from "../components/LandingPage/Banner"
import FeaturedRooms from "../components/LandingPage/FeaturedRooms"
import ExploreSection from "../components/LandingPage/ExploreSection"
import Testimonials from "../components/Testimonials"
import Footer from "../components/Footer"

const LandingPage = () => {
  return (
    <PageLayout>
      <Banner/>
      <FeaturedRooms/>
      <ExploreSection/>
      <Testimonials/>
      <Footer/>
    </PageLayout>
  )
}

export default LandingPage