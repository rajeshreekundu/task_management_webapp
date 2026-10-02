// Done, that is my login.jsx file code i attached for your review

import { Link, useNavigate } from "react-router-dom";
import FormField from "../components/ui/FormField";
import { useState, useContext } from "react";
import Button from "../components/ui/Button";
import AlertMessage from "../components/ui/AlertMessage";
import { AuthContext } from "../contexts";

const Login = () => {
  const { handleLogin } = useContext(AuthContext);

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

    //
    try {
      // await new Promise((resolve) => setTimeout(resolve, 20000));  // ➡️Temporary delay for testing loading state
      const result = await handleLogin(email, password);

      if (result.success) {
        setIsLoading(false);
        navigate("/dashboard");
      } else {
        setIsLoading(false);

        setMsg({
          type: "error",
          // text : 'Invalid user or password'
          text: result.message // from AuthProvider.jsx mention message inside of catch block
        });

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

        setPassword("")
      }
    } catch (error) {
      console.log(error);
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
              type={msg.type}
              message={msg.text}
              closing={msgClosing}
            />
          )}

          <Button
            btn={{
              type: 'submit',
              text: "Login",
              className: "auth-butn",
              variant: "primary",
            }}
            loading={isLoading}
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
