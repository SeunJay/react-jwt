import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({
  token,
  redirectPath = "/login",
  children,
}) => {
  if (!token) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};
