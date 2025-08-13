import React, { useState } from "react";
import { Card, CardBody, CardHeader } from "../components/Card";
import InputText from "../components/Input";
import Button from "../components/Button";
import { useForgotPassword } from "../hooks/useForgotPassword";
import { PuffLoader } from "react-spinners";

function VerifyOtpPage() {
  const emailReset = localStorage.getItem("email-reset");
  const [form, setForm] = useState({ email: emailReset, otp: "" });
  const { verifyOtp, error, loading } = useForgotPassword();
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
    const success = await verifyOtp(form.email, parseInt(form.otp));
    if (success) {
      localStorage.setItem("otp", form.otp);
      window.location.href = "/change-password";
    }
  };

  return (
    <div className="h-screen bg-linear-to-t from-sky-500 to-indigo-500 p-4 flex items-center justify-center">
      <Card>
        <CardHeader>
          <a href="/forgot-password">
            <i className="ri-arrow-left-s-line ri-xl"></i>
          </a>
          <h1 className="font-semibold mt-3 ">Verify OTP</h1>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit}>
            <InputText
              name="otp"
              onChange={handleChange}
              value={form.otp}
              placeholder="Input your code otp here..."
            />
            {error && <p className="text-sm text-red-500 mt-3">{error}</p>}
            <div className="mt-10 w-full text-center">
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
                  "Reset Password"
                )}
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}

export default VerifyOtpPage;
