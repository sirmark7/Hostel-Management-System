import { Outlet } from "react-router-dom"
import CustomerServiceLayout from "../components/CustomerService/CustomerServiceLayout"
import PageLayout from "../components/PageLayout"
const CustomerServicePage = () => {
  return (
    <PageLayout title="Custmer Services">
    <CustomerServiceLayout>
        <Outlet/>
    </CustomerServiceLayout>
    </PageLayout>
  )
}

export default CustomerServicePage