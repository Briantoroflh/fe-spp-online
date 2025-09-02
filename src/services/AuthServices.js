import {API} from "../utils/api";

// Officer Authentication
export async function OfficerLogin(username, password) {
    const res = await API.post("/officer/login", { username, password });
    return res.data;
}

export async function OfficerForgotPassword(email) {
    const res = await API.post("/officer/forgot-password", { email });
    return res.data;
}

export async function OfficerVerifyOTP(email, otp) {
    const res = await API.post("/officer/verify-otp", { email, otp });
    return res.data;
}

export async function OfficerResetPassword(email, otp, password) {
    const res = await API.post("/officer/reset-password", { email, otp, password });
    return res.data;
}

// Student Authentication
export async function StudentLogin(nisn, password) {
    const res = await API.post("/student/login", { nisn, password });
    return res.data;
}

export async function StudentForgotPassword(email) {
    const res = await API.post("/student/forgot-password", { email });
    return res.data;
}

export async function StudentVerifyOTP(email, otp) {
    const res = await API.post("/student/verify-otp", { email, otp });
    return res.data;
}

export async function StudentResetPassword(email, otp, password) {
    const res = await API.post("/student/reset-password", { email, otp, password });
    return res.data;
}

// Generic Login (determines user type automatically)
export async function Login(credentials) {
    const res = await API.post("/login", credentials);
    return res.data;
}

// Generic authentication functions
export async function ForgotPassword(email) {
    const res = await API.post("/forgot-password", { email });
    return res.data;
}

export async function VerifyOTP(email, otp) {
    const res = await API.post("/verify-otp", { email, otp });
    return res.data;
}

export async function ResetPassword(email, otp, password) {
    const res = await API.post("/reset-password", { email, otp, password });
    return res.data;
}

// Get current user profile
export async function Profile() {
    const res = await API.get("/user");
    return res.data;
}

// Logout
export async function Logout() {
    const res = await API.post("/logout");
    return res.data;
}