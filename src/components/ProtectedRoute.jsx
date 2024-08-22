
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./store/AppContext";
import { useContext, useEffect } from "react";
import Loader from "./Loader";
import { useLocation } from "react-router-dom"; 'react-router-dom'

const ProtectedRoute = () => {
const path=useLocation()
  const { isLogged ,setIsLogged} = useContext(AuthContext);

    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

  useEffect(() => {
    
    if (token) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [path]);

  if (isLogged === null) {
    // Optionally, render a loading state while checking authentication
    return <div><Loader/></div>;
  }

  if (!userId && !token) {
    return <Navigate to="/auth" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
