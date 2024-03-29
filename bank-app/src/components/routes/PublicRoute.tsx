import { Navigate, Outlet } from "react-router-dom";
const PublicRoute = () => {
  const isAuthenticated = false;
  const authenticatePath = "/dashboard";

  if (isAuthenticated) {
    return <Navigate replace to={`${authenticatePath}`} />;
  }

  return <Outlet />;
};

export default PublicRoute;
