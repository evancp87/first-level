/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

import { Transition, SwitchTransition } from "react-transition-group";
import { onPageEnter, onPageExit } from "../utils/helpers";

const Layout = ({ children }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  // gsap page transitions
  const handleEnter = (node) => {
    onPageEnter(node);
    setIsTransitioning(false);
  };

  const handleExit = (node) => {
    onPageExit(node);
    setIsTransitioning(true);
  };

  const location = useLocation();

  return (
    <>
      {/* <div className="relative " style={{ height: "100%" }}> */}
      <Nav />
      <SwitchTransition mode="out-in">
        <Transition
          key={location.pathname}
          timeout={0}
          onEnter={handleEnter}
          onExit={handleExit}
          unmountOnExit
        >
          <main className=" flex flex-col pb-[2.5em] ">
            <Outlet />
            {children}
          </main>
        </Transition>
      </SwitchTransition>

      <Footer />
      {/* </div> */}
    </>
  );
};

export default Layout;
