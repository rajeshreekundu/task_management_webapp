import { Link } from "react-router-dom";
import FormField from "../components/ui/FormField";
import Signup from "./Signup";

const Login = () => {
  return (
    <div className="auth-page">
      <div className="auth-content">
      <form className="">
        <h2>Login</h2>
        <FormField placeholder='Email/Phone' type="text" />
        <FormField placeholder='Password' type="password" />
        <button className="auth-butn">Login</button>
      </form>
     
      <p className="auth-botom-text">Don't have an account? <Link to='/register'>Register</Link> </p>
      </div>
    </div>
  );
};

export default Login;