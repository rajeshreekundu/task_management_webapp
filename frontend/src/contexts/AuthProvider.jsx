import { useState, useEffect } from "react";
import { AuthContext } from "./index";
import axios from "axios";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  const handleLogin = async (email, password) => {
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
      console.log(`Login Success ${response.response}`);

      const userRes = await axios.get("http://localhost:3000/api/auth/me", {
        withCredentials: true,
      });
      setUser(userRes.data.user);

      // console.log("Current User:", userRes.data.user);
      return {
        success: true,
      };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Unable to connect to server",
      };
    }
  };

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/auth/me", {
          withCredentials: true,
        });
        setUser(response.data.user);
      } catch (err) {
        console.log(`No logged-in user ${err}`);
      }

      setAuthLoading(false);
    };

    getCurrentUser();
  }, []);

  // for logout
  const handleLogout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/logout",
        {},
        { withCredentials: true },
        {
          headers: {
            "X-CSRF-TOKEN": "your-token-here", // Only if manually managing tokens
          },
        },
      );
      setUser(null);
      console.log(`Logout...${response.data}`);

      // return true   // now its change to below code
      return {
        success: true,
      };
    } catch (error) {
      // console.log(error);
      return {
        success: false,
        message:
          error.response?.data?.message || "Sorry Unable to connect to server",
      };
    }
  };

  return (
    <>
      <AuthContext.Provider
        value={{ user, setUser, authLoading, handleLogin, handleLogout }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthProvider;

// now its login working but when i test with wrong credential password field not reset it stay user input
// but logout menu not working when i click logout menu in console show error what we handle
// "Logout error AxiosError: Request failed with status code 403"

// I have attached my full AuthProvider.jsx file code
