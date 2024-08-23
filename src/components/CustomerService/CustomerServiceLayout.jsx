
import { CustomerServiceNavItems } from "../utils/data"
import AlternativeNavMini from "./AlternativeNavMini"
import { PropTypes } from "prop-types"
import { RiCustomerService2Fill, RiContactsBookFill } from "react-icons/ri";
import { MdAssignmentReturn, MdPrivacyTip } from "react-icons/md";
import { FaQuestionCircle } from "react-icons/fa";
import { GoLaw } from "react-icons/go";
import SideNavHome from "../sidebar/SideNavHome";
export default function CustomerServiceLayout({children}) {
  const icons=[
  <RiCustomerService2Fill key={0} className="font-bold text-[20px]"/>,
  <RiContactsBookFill key={1} className="font-bold text-[20px]" />,
  <MdAssignmentReturn key={2} className="font-bold text-[20px]"/>,
  <FaQuestionCircle key={3} className="font-bold text-[20px]"/>,
  <MdPrivacyTip  key={4} className="font-bold text-[20px]" />,
  <GoLaw key={5} className="font-bold text-[20px]" />

  ]
  return ( <section className="flex flex-col w-full md:flex-row items-start justify-start relative mt-4 pt-8 mb-8 gap-5 ">
   <AlternativeNavMini/>
    <SideNavHome navItems={CustomerServiceNavItems} linkPreFix='/customer_service' icons={icons} />
    {children}
    </section>)
}
CustomerServiceLayout.propTypes={children:PropTypes.node}