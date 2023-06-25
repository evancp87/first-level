import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "./Nav";

import { Transition, SwitchTransition } from "react-transition-group";
import { onPageEnter, onPageExit } from "../utils/helpers";

const Layout = ({ children }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

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
      <Nav />
      <SwitchTransition mode="out-in">
        <Transition
          key={location.pathname}
          classNames="page"
          // timeout={200}
          onEnter={handleEnter}
          onExit={handleExit}
          unmountOnExit
        >
          <main className="flex flex-col">
            <Outlet />
            {children}
          </main>
        </Transition>
      </SwitchTransition>
    </>
  );
};

export default Layout;
