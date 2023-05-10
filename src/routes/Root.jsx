import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";
import Nav from "../components/Nav.jsx";

const Root = () => {
  return (
    <>
      <Header />
      <Nav />
      <Outlet />
    </>
  );
};

export default Root;
