import React from "react";
import AllTimeBest from "./AllTimeBest";
import NewGamesList from "./NewGamesList";

const Dashboard = () => {
  return (
    <>
      <NewGamesList />
      <AllTimeBest />
    </>
  );
};

export default Dashboard;
