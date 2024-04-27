import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
  const isLogin = localStorage.getItem("token");
  return isLogin ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
