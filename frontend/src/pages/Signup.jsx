import { Link } from "react-router-dom";
import FormField from "../components/ui/FormField";
import Login from "./Login";

const Signup = () => {
  return (
    <div className="auth-page">
      <div className="auth-content">
        <h2>Register</h2>
        <form className="">
          <FormField placeholder="Name" type="text" />
          <FormField placeholder="Email" type="email" />
          <FormField placeholder="Phone" type="number" />
          <FormField placeholder="Password" type="password" />
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
