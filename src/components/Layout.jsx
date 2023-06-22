import { useState } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main className="flex flex-col">
        <Outlet />
        {children}
      </main>
    </>
  );
};

export default Layout;
