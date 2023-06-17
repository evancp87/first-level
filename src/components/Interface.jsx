import { useState } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import SecondaryNav from "./SecondaryNav";
// import Dashboard from "../features/Dashboard/Dashboard";
const Interface = () => {
  return (
    <>
      <SecondaryNav />
      <main>
        <Outlet />
      </main>
      <Nav />
    </>
  );
};

export default Interface;
