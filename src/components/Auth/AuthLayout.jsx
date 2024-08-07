
import {PropTypes} from "prop-types";   
const AuthLayout = ({ children }) => {
  return (
    <div className="flex items-center justify-center p-24">{children}</div>
  );
};
AuthLayout.propTypes = {
  children: PropTypes.node,
};

export default AuthLayout;
