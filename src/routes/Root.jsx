import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../components/Header.jsx";
import Nav from "../components/Nav.jsx";

const Root = () => {
  return (
    <>
      <Header />
      <Nav />
      <Outlet />
      <ToastContainer />
    </>
  );
};

export default Root;
