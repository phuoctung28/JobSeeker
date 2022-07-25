import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext.js";

const ProtectedRoutes = () => {
  const { user } = useContext(AuthContext);
  let location = useLocation();
  // console.log(user);
  return !!user ? <Outlet /> : <Navigate to="/login" state={{ from: location }} />;
};

export default ProtectedRoutes;
