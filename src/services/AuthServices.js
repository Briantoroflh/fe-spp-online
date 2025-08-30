import {API} from "../utils/api";

export async function Login(username, password) {
    const res = await API.post("/login-officer", {username, password});
    console.log(res.data)
    return res.data;
}

export async function ForgotPassword(email) {
    const res = await API.post("/forgot-password-officer", {email});
    return res.data;
}

export async function VerifyOTP(email, otp) {
    const res = await API.post("/verify-otp-officer", {email, otp});
    return res.data;
}

export async function ResetPassword(email, otp, password) {
    const res = await API.post("/reset-password-officer", {email, otp, password});
    return res.data;
}

export async function Profile() {
    const res = await API.get("/me")
    return res.data
}
