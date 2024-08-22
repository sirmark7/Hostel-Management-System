
import Footer from '../components/Footer'
import PageLayout from '../components/PageLayout'
import WishlistItems from '../components/WishlistItems'

const Wishlist = () => {
  return (
    <PageLayout title='My Wishlist'>
        <WishlistItems/>
        <Footer/>
    </PageLayout>
    
  )
}

export default Wishlist