import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import {getToken} from "../utils/Cookies";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import VerifyOtpPage from "../pages/VerifyOtpPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import Dashboard from "../pages/Dashboard";
import BillStudentPages from "../pages/BillStudentPages";
import PrivateRoute from "../components/PrivateRoute.jsx";

function AppRoutes() {
    const token = getToken();

    return (
        <Routes>
            <Route
                path="/login"
                element={token ? <Navigate to="/dashboard"/> : <LoginPage/>}
            />
            <Route
                path="/dashboard"
                element={<PrivateRoute><Dashboard/></PrivateRoute>}
            />
            <Route path="/forgot-password" element={<ForgotPasswordPage/>}/>
            <Route path="/check-otp" element={<VerifyOtpPage/>}/>
            <Route path="/change-password" element={<ResetPasswordPage/>}/>
            <Route path="/bill-student" element={<PrivateRoute><BillStudentPages/></PrivateRoute>}/>
        </Routes>
    );
}

export default AppRoutes;
