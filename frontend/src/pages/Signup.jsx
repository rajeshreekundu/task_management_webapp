import { Link, useNavigate } from "react-router-dom";
import FormField from "../components/ui/FormField";
import { useState } from "react";
import axios from "axios";
import Button from "../components/ui/Button";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const formSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("All fields are required");
      return;
    }

    const signupFormData = {
      name: name,
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/create",
        signupFormData,
      );
      console.log("Signup success", response.data);

      navigate('/');
      console.log("Craete Successfully User:", response.data.user);
    } catch (err) {
      console.log(`Signup Error ${err}`);
    }
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
          <Button btn={{ text: "Register", className: "auth-butn" }} />
          {/* <button className="auth-butn">Register</button> */}
        </form>
        <p className="auth-botom-text">
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;


// I tried to integrate /create API, kindly check its okay or not