import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import VerifyOtpPage from "../pages/VerifyOtpPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import Dashboard from "../pages/Dashboard";
import BillStudentPages from "../pages/BillStudentPages";
import PrivateRoute from "../components/PrivateRoute.jsx";
import { useAuth } from "../context/AuthContext";

function AppRoutes() {
    const { isAuthenticated, loading } = useAuth();

    // Show loading spinner while checking auth status
    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading...</p>
                </div>
            </div>
        );
    }

    return (
        <Routes>
            {/* Public routes */}
            <Route
                path="/login"
                element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <LoginPage />}
            />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/check-otp" element={<VerifyOtpPage />} />
            <Route path="/change-password" element={<ResetPasswordPage />} />

            {/* Protected routes */}
            <Route
                path="/dashboard"
                element={
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>
                }
            />
            <Route
                path="/bill-student"
                element={
                    <PrivateRoute>
                        <BillStudentPages />
                    </PrivateRoute>
                }
            />

            {/* Default redirect */}
            <Route
                path="/"
                element={
                    isAuthenticated ? 
                    <Navigate to="/dashboard" replace /> : 
                    <Navigate to="/login" replace />
                }
            />

            {/* Catch all route */}
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
}

export default AppRoutes;