import React, { useContext } from "react";
import { AuthContext } from "../contexts";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user, authLoading } = useContext(AuthContext); //using useContext used AuthContext

  if(authLoading){
    return <div> Checking authentication...</div>
  }
  if (!user) {
    return <Navigate to="/" replace />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
