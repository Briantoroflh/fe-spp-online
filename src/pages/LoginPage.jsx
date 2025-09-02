import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import InputText from "../components/Input";
import { useAuth } from "../context/AuthContext";
import Alert from "../components/Alert";
import { PuffLoader } from "react-spinners";

function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
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
    // Clear errors when user starts typing
    if (e.target.name === "username") setUsernameError("");
    if (e.target.name === "password") setPasswordError("");
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValid = true;

    // Validation
    if (!form.username.trim()) {
      setUsernameError("Username cannot be empty!");
      isValid = false;
    } else {
      setUsernameError("");
    }

    if (!form.password.trim()) {
      setPasswordError("Password cannot be empty!");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (!isValid) return;

    try {
      setLoading(true);
      setError("");
      
      // Use the login function from AuthContext
      const result = await login(form);
      
      if (result.success) {
        // Login successful, navigate to dashboard
        console.log("Login successful, navigating to dashboard");
        navigate("/dashboard", { replace: true });
      } else {
        setError(result.message || "Login gagal");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError(
        err.response?.data?.message || 
        err.message || 
        "Terjadi kesalahan saat login"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-screen h-screen flex">
      {/* left side */}
      <div className="w-1/2 h-full">
        <img src="./src/assets/img-tb.jpg" alt="" className="h-full object-cover" />
      </div>

      {/* right side */}
      <div className="w-1/2 h-full bg-gradient-to-t from-sky-500 to-indigo-500 flex flex-col p-5 text-white font-poppins font-medium text-xl">
        <h3>Hello!</h3>
        <h3>Welcome to SmartSPP</h3>
        
        <form className="m-auto w-full max-w-md" onSubmit={handleSubmit}>
          <h2 className="mb-3 text-2xl font-semibold font-poppins text-center">Login</h2>
          
          {error && (
            <Alert>
              <i className="ri-error-warning-line ri-lg"></i>
              {error}
            </Alert>
          )}
          
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-sm mb-2">Username / NISN</p>
              <InputText
                name="username"
                placeholder="Enter your username or NISN..."
                onChange={handleChange}
                value={form.username}
                disabled={loading}
              />
              {usernameError && (
                <p className="text-sm text-red-400 mt-1">{usernameError}</p>
              )}
            </div>
            
            <div>
              <p className="text-sm mb-2">Password</p>
              <InputText
                name="password"
                placeholder="Enter your password..."
                type="password"
                onChange={handleChange}
                value={form.password}
                disabled={loading}
              />
              {passwordError && (
                <p className="text-sm text-red-400 mt-1">{passwordError}</p>
              )}
            </div>
            
            <a href="/forgot-password" className="text-end text-xs hover:underline">
              Forgot password?
            </a>
            
            <div className="m-auto flex flex-col gap-5 w-full">
              <Button type="submit" disabled={loading} className="w-full">
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
              
              <a href="#" className="text-sm text-center hover:underline">
                Don't have an account?
              </a>
            </div>
          </div>
        </form>
        
        <div className="text-xs text-center mt-8">
          <p>If you have trouble please contact</p>
          <p>zetoonikcompany@gmail.com</p>
        </div>
        
        <div className="flex justify-end mt-4">
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