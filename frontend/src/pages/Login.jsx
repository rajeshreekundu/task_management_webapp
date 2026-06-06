import { Link, useNavigate } from "react-router-dom";
import FormField from "../components/ui/FormField";
import Signup from "./Signup";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const formSubmit = (e) => {
    e.preventDefault();
    //
    if (!email || !password) {
      alert("All fields are required");
      return;
    }
    console.log("Form submitted successfully");
    navigate("/dashboard");
  };

  return (
    <div className="auth-page">
      <div className="auth-content">
        <form
          className=""
          onSubmit={(e) => {
            formSubmit(e);
          }}
        >
          <h2>Login</h2>
          <FormField
            placeholder="Email"
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <FormField
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="auth-butn">Login</button>
        </form>

        <p className="auth-botom-text">
          Don't have an account? <Link to="/create">Register</Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
