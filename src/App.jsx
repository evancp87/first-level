import { useState, useCallback, useEffect, lazy, suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
// import "dist/output.css";
import "../dist/output.css";
import { Routes, Route, Outlet } from "react-router-dom";
import Search from "./features/Search/Search";
import Favorites from "./features/Favorites/Favorites";
import GameDetail from "./features/Game/GameDetail";
// import Layout from "./components/Layout";
import SplashScreen from "./components/SplashScreen";
import Interface from "./components/Interface";
import Error404 from "./components/Error404";
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

  const getData = useCallback(async () => {
    dispatch(setGames());

    setTimeout(() => {
      setShowSplash(false);
    }, 3000);
  }, [dispatch, setShowSplash]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <>
      {showSplash ? (
        <SplashScreen />
      ) : (
        <>
          <Routes>
            <Route exact path="/" element={<Interface />} />

            <Route path="/search" element={<Search />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/game/:slug" element={<GameDetail />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </>
      )}
    </>
  );
};

export default App;
