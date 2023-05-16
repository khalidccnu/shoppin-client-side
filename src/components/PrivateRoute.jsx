import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider.jsx";

const PrivateRoute = ({ children }) => {
  const { userInfo } = useContext(AuthContext);
  const location = useLocation();

  return userInfo?.uid ? (
    children
  ) : (
    <Navigate to="/login" state={{ fromURL: location }}></Navigate>
  );
};

export default PrivateRoute;
