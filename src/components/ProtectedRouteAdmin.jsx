
import { Navigate, Outlet } from "react-router-dom";

import { useEffect } from "react";


const ProtectedRouteAdmin = () => {


    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const role =localStorage.getItem('role')

  useEffect(() => {

  if (!userId && !token) {
    return <Navigate to="/auth" />;
  }

  if(role !=='admin'){
    <Navigate to="/auth" />
    return 
  }},[])

  return <Outlet />;
}

export default ProtectedRouteAdmin;
