
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ component: Component }) => {
  const uuid = sessionStorage.getItem("uuid")

  // if (uuid) return <h1>Loading...</h1>
  return uuid ? <Component /> : <Navigate to="/" />;
};

export default PrivateRoute;
