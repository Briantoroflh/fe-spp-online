import React, { useState } from "react";
import { Card, CardBody, CardHeader } from "../components/Card";
import InputText from "../components/Input";
import Button from "../components/Button";
import { useForgotPassword } from "../hooks/useForgotPassword";
import { PuffLoader } from "react-spinners";

function ResetPasswordPage() {
  const emailReset = localStorage.getItem("email-reset");
  const otpReset = localStorage.getItem("otp");
  const [form, setForm] = useState({
    email: emailReset,
    otp: otpReset,
    password: "",
  });
  const { resetPassword, error, loading } = useForgotPassword();
  const [color, setColor] = useState("#0097D1");
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await resetPassword(
      form.email,
      parseInt(form.otp),
      form.password
    );
    if (success) {
      localStorage.removeItem("email-reset");
      localStorage.removeItem("otp");
      window.location.href = "/login";
    }
  };

  return (
    <div className="h-screen bg-linear-to-t from-sky-500 to-indigo-500 p-4 flex items-center justify-center">
      <Card>
        <CardHeader>
          <a href="/forgot-password">
            <i className="ri-arrow-left-s-line ri-xl"></i>
          </a>
          <h1 className="font-semibold mt-3 ">Reset Password</h1>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit}>
            <div>
              <h3 className="text-sm">New Password</h3>
              <InputText
                placeholder="Input new password here..."
                name="password"
                onChange={handleChange}
                value={form.password}
              />
              {error && <p className="text-sm text-red-500 mt-3">{error}</p>}
            </div>
            <div className="w-full text-center mt-8">
              <Button type="submit">
                {loading ? (
                  <PuffLoader
                    color={color}
                    loading={loading}
                    cssOverride={override}
                    size={25}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                ) : (
                  "Change Password"
                )}
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}

export default ResetPasswordPage;
