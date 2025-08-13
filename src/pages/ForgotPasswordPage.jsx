import { useState } from "react";
import { Card, CardBody, CardHeader } from "../components/Card";
import InputText from "../components/Input";
import Button from "../components/Button";
import { useForgotPassword } from "../hooks/useForgotPassword";
import { PuffLoader } from "react-spinners";

function ForgotPasswordPage() {
  const [form, setForm] = useState({ email: "" });
  const { requestOtp, error, loading } = useForgotPassword();
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
    const success = await requestOtp(form.email);
    if (success) {
      localStorage.setItem("email-reset", form.email);
      window.location.href = "/check-otp";
    }
  };

  return (
    <div className="h-screen bg-linear-to-t from-sky-500 to-indigo-500 p-4 flex items-center justify-center">
      <Card>
        <CardHeader>
          <a href="/login">
            <i className="ri-arrow-left-s-line ri-xl"></i>
          </a>
          <h1 className="mt-3 font-semibold text-xl">Forgot your password?</h1>
          <p className="mt-2 text-sm">
            A code will be send to your email to help reset password.
          </p>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleSubmit}>
            <h3 className="text-sm">Email</h3>
            <InputText
              placeholder="Enter your email here...."
              name="email"
              onChange={handleChange}
              value={form.email}
            />
            {error && <p className="text-sm text-red-500 mt-3">{error}</p>}
            <div className="text-center mt-17 w-full p-2">
              <Button type="submit" disabled={loading}>
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
                  "Send OTP"
                )}
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}

export default ForgotPasswordPage;
