import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import Dashboard from "../pages/Dashboard";
import { getToken } from "../utils/Cookies";

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
    </Routes>
  );
}

export default AppRoutes;
