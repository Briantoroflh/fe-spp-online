import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import { getToken } from "../utils/Cookies";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import VerifyOtpPage from "../pages/VerifyOtpPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import Dashboard from "../pages/Dashboard";

function AppRoutes() {
  const token = getToken();

  return (
    <Routes>
      <Route
        path="/login"
        element={token ? <Navigate to="/dashboard" /> : <LoginPage />}
      />
      <Route
        path="/dashboard"
        element={token ? <Dashboard /> : <Navigate to="/login" />}
      />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/check-otp" element={<VerifyOtpPage />} />
      <Route path="/change-password" element={<ResetPasswordPage />} />
    </Routes>
  );
}

export default AppRoutes;
