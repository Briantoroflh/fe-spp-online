import React, { useState } from "react";
import Button from "../components/Button";
import InputText from "../components/Input";
import { useAuth } from "../context/AuthContext";
import Alert from "../components/Alert";
import { BarLoader, BounceLoader, CircleLoader, ClipLoader, DotLoader, HashLoader, MoonLoader, PacmanLoader, PuffLoader, RingLoader, RiseLoader, SyncLoader } from "react-spinners";

function LoginPage() {
  const { login } = useAuth();
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);
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

    let isNotEmpty = true;

    if (!form.username.trim()) {
      setUsernameError("Username cannot be empty!");
      isNotEmpty = false;
    } else {
      setUsernameError("");
    }

    if (!form.password.trim()) {
      setPasswordError("Password cannot be empty!");
      isNotEmpty = false;
    } else {
      setPasswordError("");
    }

    if (!isNotEmpty) return;

    try {
      setLoading(true);
      await login(form.username, form.password);
      window.location.href = "/dashboard";
    } catch (err) {
      setError(err.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-screen h-screen flex">
      {/* left side */}
      <div className="w-1/2 h-full">
        <img src="./src/assets/img-tb.jpg" alt="" className="h-full" />
      </div>

      {/* rigth side */}
      <div className="w-1/2 h-full bg-linear-to-t from-sky-500 to-indigo-500 flex flex-col p-5 text-white font-poppins font-medium text-xl">
        <h3>Hello!</h3>
        <h3>Welcome to SmartSPP</h3>
        <form className="m-auto" onSubmit={handleSubmit}>
          <h2 className="mb-3 text-2xl font-semibold font-poppins">Login</h2>
          {error && (
            <Alert>
              <i className="ri-error-warning-line ri-lg"></i>
              {error}
            </Alert>
          )}
          <div className="flex flex-col gap-12">
            <div>
              <p className="text-sm">Username</p>
              <InputText
                name="username"
                placeholder="Enter your username..."
                onChange={handleChange}
                value={form.username}
              />
              {usernameError && (
                <p className="text-sm text-red-400 mt-2">{usernameError}</p>
              )}
            </div>
            <div>
              <p className="text-sm">Password</p>
              <InputText
                name="password"
                placeholder="Enter your password..."
                type="password"
                onChange={handleChange}
                value={form.password}
              />
              {passwordError && (
                <p className="text-sm text-red-400 mt-2">{passwordError}</p>
              )}
            </div>
            <a href="/forgot-password" className="text-end text-xs ">
              Forgot password?
            </a>
            <div className="m-auto flex flex-col gap-5">
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
                  "Login"
                )}
              </Button>
              <a href="" className="text-sm text-center">
                Don’t have an account?
              </a>
            </div>
          </div>
        </form>
        <div className="text-xs text-center">
          <p>If you have trouble please contact</p>
          <p>zetoonikcompany@gmail.com</p>
        </div>
        <div className="flex justify-end">
          <img
            src="./src/assets/logo-smartspp.svg"
            alt=""
            className="w-20 h-10"
          />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
