import { Navigate } from "react-router-dom";

const PrivateRoute = (props) => {
  const { component: Component, isLoggedIn } = props;
  return isLoggedIn ? <Component /> : <Navigate to="/" />;
};

export default PrivateRoute;
