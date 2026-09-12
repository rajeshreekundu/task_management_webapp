import { Link, useNavigate } from "react-router-dom";
import FormField from "../components/ui/FormField";
import { useState } from "react";
import axios from "axios";
import Button from "../components/ui/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const formSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("All fields are required");
      return;
    }
    const loginFormData = {
      email: email,
      password: password,
    };

    try {
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

      navigate("/dashboard");
      console.log("Current User:", userResponse.data.user)
    } catch (err) {
      console.log(`Login Error ${err}`);
    }
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
         <Button btn={{text:"Login", className:'auth-butn'}}/>
          {/* // <button className="auth-butn">Login</button> */}
        </form>

        <p className="auth-botom-text">
          Don't have an account? <Link to="/create">Register</Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
