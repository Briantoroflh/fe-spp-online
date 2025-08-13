import { API } from "../utils/api";

export async function Login(email, password) {
  const res = await API.post("/login", { email, password });
  return res.data;
}

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

export async function Profile() {
    const res = await API.get("/me")
    return res.data
}
