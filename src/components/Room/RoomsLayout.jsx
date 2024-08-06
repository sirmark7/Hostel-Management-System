import { PropTypes } from "prop-types";
import Filters from "../Filters";
import ShopHeader from "../ShopHeader";
export default function RoomsLayout({children}) {
  return (
    <div className="text-black w-full ">
      <ShopHeader />
      <div className="flex justify-center md:justify-between items-start relative">
        <Filters />
        {children}
      </div>
    </div>
  );
}

RoomsLayout.propTypes={
  children:PropTypes.node
}
