
import {PropTypes} from "prop-types";   
import { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
const AuthLayout = () => {
  const [oldUser,setOldUser]=useState(false)
  const handleFormToggle=()=>(setOldUser(prev=>!prev))
  return (
    <div className="flex items-center justify-center p-24">
      {
        oldUser?<Login toggleForm={handleFormToggle} />:<Signup toggleForm={handleFormToggle} />
      }
    </div>
  );
}; 
AuthLayout.propTypes = {
  children: PropTypes.node,
};

export default AuthLayout;
