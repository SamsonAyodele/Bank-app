import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import Login from "../../views/auth/login";
import Register from "../../views/auth/register";
import Home from "../../views/dashboard/home";
import Transaction from "../../views/dashboard/transaction";
import ForgotPassword from "../../views/auth/forgot-password";
import ResetPassword from "../../views/auth/reset-password";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Home />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/" element={<Navigate replace to="/dashboard" />} />
        <Route path="*" element={<Navigate replace to="/dashboard" />} />
      </Route>

      <Route path="/" element={<PublicRoute />}>
        <Route path="/sign-in" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="*" element={<Navigate replace to="/sign-in" />} />
      </Route>
    </Routes>
  );
};

export default AllRoutes;
