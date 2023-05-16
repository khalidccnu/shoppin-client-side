import React from "react";
import { Navigate } from "react-router-dom";

const LogOffRoute = ({ children }) => {
  const isValidUser = sessionStorage.getItem("valid-user");

  return !isValidUser ? children : <Navigate to="/dashboard" />;
};

export default LogOffRoute;
