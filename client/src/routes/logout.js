import { useEffect, useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Logout = () => {
  const { logout: logoutUser } = useContext(AuthContext)
 
  useEffect(() => {
    logoutUser()
  }, [logoutUser])
  
  return <Navigate to="/login" />;
};

export default Logout;
