import { useState, useCallback, useEffect, lazy, suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import "dist/output.css";
import { Routes, Route, Outlet } from "react-router-dom";
import Search from "./features/Search/Search";
import Favorites from "./features/Favorites/Favorites";
import GameDetail from "./features/Game/GameDetail";
import Layout from "./components/Layout";
import SplashScreen from "./components/SplashScreen";
import Interface from "./components/Interface";
import Nav from "./components/Nav";
import {
  sort,
  reset,
  newlyReleased,
  upcoming,
  filterHighestRated,
  setGames,
} from "./features/Dashboard/dashboardSlice";

const App = () => {
  const dispatch = useDispatch();
  const [showSplash, setShowSplash] = useState(true);
  // const dispatch = useDispatch();
  // const data = useSelector(selectData);

  // gets api data and renders splash screen
  const splashScreen = useCallback(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 3000);
  }, []);

  // dispatch call for simpsons data
  useEffect(() => {
    dispatch(setGames());
    splashScreen();
  }, [dispatch, splashScreen]);
  return (
    <>
      {showSplash ? (
        <SplashScreen />
      ) : (
        <>
          <Nav />
          <Routes exact path="/" element={<Interface />}>
            <Route path="/" element={<Layout />} />

            <Route path="/search" element={<Search />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/game/:id" element={<GameDetail />} />
          </Routes>
        </>
      )}
    </>
  );
};

export default App;
