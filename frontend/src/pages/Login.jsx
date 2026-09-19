// login.jsx file code

import { Link, useNavigate } from "react-router-dom";
import FormField from "../components/ui/FormField";
import { useState } from "react";
import axios from "axios";
import Button from "../components/ui/Button";
import AlertMessage from "../components/ui/AlertMessage";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginSubmitted, setLoginSubmitted] = useState();
  const [msg, setMsg] = useState({
    type: "",
    text: "",
  });
  const [msgClosing, setMsgClosing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const formSubmit = async (e) => {
    e.preventDefault();
    setLoginSubmitted(true);
    if (!email || !password) {
      // alert("All fields are required");
      return;
    }
    setIsLoading(true);
    const loginFormData = {
      email: email,
      password: password,
    };

    try {
      // await new Promise((resolve) => setTimeout(resolve, 20000));  // ➡️Temporary delay for testing loading state
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        loginFormData,
        { withCredentials: true },
      );
      console.log(`Login Success ${response.data}`);

      // for get current user data after login::
      const userResponse = await axios.get(
        "http://localhost:3000/api/auth/me",
        { withCredentials: true },
      );
      console.log("Current User:", userResponse.data);

      setIsLoading(false); //for loading

      navigate("/dashboard");
      console.log("Current User:", userResponse.data.user);
    } catch (err) {
      console.log(`Login Error ${err}`);
      setIsLoading(false);

      // For display error sms during login
      setMsg({
        type: "error",
        text: err.response?.data?.message || "Unable to connect to server",
      });
      setPassword("");
      //For clear
      setTimeout(() => {
        console.log("Closing message...");
        setMsgClosing(true);

        setTimeout(() => {
          setMsg({
            type: "",
            text: "",
          });

          setMsgClosing(false);
        }, 300);
      }, 3000);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-content">
        <form
          className=""
          noValidate
          onSubmit={(e) => {
            formSubmit(e);
          }}
        >
          <h2>Login</h2>
          <FormField
            label="Email"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            error={loginSubmitted && (!email || !emailPattern.test(email))}
            errorMsg={
              !email ? "Email is required" : "Enter a valid email address"
            }
          />
          <FormField
            label="Password"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            error={loginSubmitted && !password}
            errorMsg="Password is required"
          />

          {msg.type && (
            <AlertMessage
              // type="success" message="Login successful"
              type={msg.type}
              message={msg.text}
              closing={msgClosing}
            />
          )}

          <Button
            btn={{
              text: "Login",
              className: "auth-butn",
              variant: "primary",
              
            }}
            loading = {isLoading}
          />
        </form>

        <p className="auth-botom-text">
          Don't have an account? <Link to="/create">Register</Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
