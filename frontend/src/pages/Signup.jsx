import { Link, useNavigate } from "react-router-dom";
import FormField from "../components/ui/FormField";
import Login from "./Login";
import { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const formSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("All fields are required");
      return;
    }
    useNavigate;
    console.log("Form submitted successfully");
    navigate("/");
  };
  return (
    <div className="auth-page">
      <div className="auth-content">
        <h2>Register</h2>
        <form
          className=""
          onSubmit={(e) => {
            formSubmit(e);
          }}
        >
          <FormField
            placeholder="Name"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <FormField
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {/* <FormField placeholder="Phone" type="number" /> */}
          <FormField
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="auth-butn">Register</button>
        </form>
        <p className="auth-botom-text">
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
