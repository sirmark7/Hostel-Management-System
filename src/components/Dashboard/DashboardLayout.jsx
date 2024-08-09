import { PropTypes } from "prop-types";
const DashboardLayout = ({ children }) => {
  return <div className="flex items-center justify-center">{children}</div>;
};
DashboardLayout.propTypes={
  children:PropTypes.node
}


export default DashboardLayout;
