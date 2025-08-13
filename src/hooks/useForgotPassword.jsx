import { useState } from "react";
import {
  ForgotPassword,
  ResetPassword,
  VerifyOTP,
} from "../services/AuthServices";

export function useForgotPassword() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const requestOtp = async (email) => {
    try {
      setLoading(true);
      setError(null);
      await ForgotPassword(email);
      return true;
    } catch (err) {
      setError(err.response.data.message || "Something went wrong");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async (email, otp) => {
    try {
      setLoading(true);
      setError(null);
      await VerifyOTP(email, otp);
      return true;
    } catch (err) {
      setError(err.response.data.message || "Something went wrong");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async (email, otp, password) => {
    try {
      setLoading(true);
      setError(null);
      await ResetPassword(email, otp, password);
      return true;
    } catch (err) {
      setError(err.response.data.message || "Something went wrong");
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { requestOtp, verifyOtp, resetPassword, error, loading };
}
