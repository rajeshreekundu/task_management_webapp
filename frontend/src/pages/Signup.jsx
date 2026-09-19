import { Link, useNavigate } from "react-router-dom";
import FormField from "../components/ui/FormField";
import { useState } from "react";
import axios from "axios";
import Button from "../components/ui/Button";
import AlertMessage from "../components/ui/AlertMessage";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
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

    setSubmitted(true);

    if (!name || !email || !emailPattern.test(email) || !password) {
      return;
    }
    setIsLoading(true)

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
      setMsg({
        type: "success",
        text: "Register Successfully!",
      });

      setIsLoading(false)

      setTimeout(() => {
        navigate("/");
        console.log("Craete Successfully User:", response.data.user);
      }, 2000);
      //
    } catch (err) {
      console.log(`Signup Error ${err}`);
      setIsLoading(false)
      setMsg({
        type: "error",
        text: err.response?.data?.message || "User Already Exist!",
      });
      setPassword("");

      setTimeout(() => {
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
        <h2>Register</h2>

        <form
          className=""
          noValidate
          onSubmit={(e) => {
            formSubmit(e);
          }}
        >
          <FormField
            label="Name"
            placeholder="Name"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            error={submitted && !name}
            errorMsg="Name is required"
          />
          <FormField
            label="Email"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            error={submitted && (!email || !emailPattern.test(email))}
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
            error={submitted && !password}
            errorMsg="Password is required"
          />

          {msg.type && (
            <AlertMessage
              type={msg.type}
              message={msg.text}
              closing={msgClosing}
            />
          )}

          <Button
            btn={{
              text: "Register",
              className: "auth-butn",
              variant: "primary",
            }}
            loading={isLoading}
          />
        </form>
        <p className="auth-botom-text">
          Already have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;