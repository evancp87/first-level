import { useState, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

import "../dist/output.css";
import { Routes, Route } from "react-router-dom";
import Search from "./features/Dashboard/Search";
import Dashboard from "./features/Dashboard/Dashboard";
import Favorites from "./features/Favorites/Favorites";
import GameDetail from "./features/Game/GameDetail";
import SplashScreen from "./components/SplashScreen";
import Interface from "./components/Interface";
import Error404 from "./components/Error404";
import Layout from "./components/Layout";
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
          <Layout>
            <Routes>
              <Route exact path="/" element={<Interface />} />
              <Route index element={<Dashboard />} />
              <Route path="/search" element={<Search />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/game/:slug" element={<GameDetail />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </Layout>
        </>
      )}
    </>
  );
};

export default App;
