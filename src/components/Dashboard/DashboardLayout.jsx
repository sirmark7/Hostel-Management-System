import { PropTypes } from "prop-types";
const DashboardLayout = ({ children }) => {
  return (<div className="flex relative items-start justify-start h-[900px] overflow-y-hidden ">

          {children}
          </div>)
};
DashboardLayout.propTypes={
  children:PropTypes.node
}


export default DashboardLayout;
