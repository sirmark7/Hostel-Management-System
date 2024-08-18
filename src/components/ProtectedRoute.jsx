
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./store/AppContext";
import { useContext } from "react";

const ProtectedRoute = () => {
  const { isLogged } = useContext(AuthContext);
//   let isLogin = localStorage.getItem("authToken") 


  return isLogged ? <Outlet />  : <Navigate to="/auth" />
};

export default ProtectedRoute;
