import React, { useState, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import PacmanLoader from "react-spinners/PacmanLoader";
import "../dist/output.css";
import { Routes, Route } from "react-router-dom";
import Search from "./features/Dashboard/Search";
import Dashboard from "./features/Dashboard/Dashboard";
import Favorites from "./features/Favorites/Favorites";
import GameDetail from "./features/Game/GameDetail";
import Interface from "./components/Interface";
import Error404 from "./components/Error404";
import Layout from "./components/Layout";
import "react-loading-skeleton/dist/skeleton.css";
import { setGames } from "./features/Dashboard/dashboardSlice";

const App = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const getData = useCallback(async () => {
    setLoading(true);
    dispatch(setGames());

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [dispatch, setLoading]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <>
      {loading ? (
        <div className="flex h-screen items-center justify-center">
          <PacmanLoader color="#36d7b7" loading={loading} />
        </div>
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
