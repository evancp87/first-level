import { useState } from "react";
import { Outlet } from "react-router-dom";
import Dashboard from "../features/Dashboard/Dashboard";
import Nav from "./Nav";
import SecondaryNav from "./SecondaryNav";
// import Dashboard from "../features/Dashboard/Dashboard";

const Interface = () => {
  return (
    <>
      <Nav />
      <SecondaryNav />

      <main className="max-w-full">
        <Outlet />
        {/* <Dashboard /> */}
      </main>
    </>
  );
};

export default Interface;
