
import SideNav from "../Sidebar/SideNav"
import { CustomerServiceNavItems } from "../utils/data"
import AlternativeNavMini from "./AlternativeNavMini"
import { PropTypes } from "prop-types"
export default function CustomerServiceLayout({children}) {
  return <section className="flex flex-col md:flex-row items-start justify-start relative pt-8 mb-8 gap-5 ">
   <AlternativeNavMini/>
    <SideNav navItems={CustomerServiceNavItems} linkPreFix='/customer_service' icons={[]} />
    {children}
    </section>
}
CustomerServiceLayout.propTypes={children:PropTypes.node}