/* eslint-disable react/prop-types */
import React from "react";
import AllTimeBest from "./AllTimeBest";
import NewGamesList from "./NewGamesList";

const Dashboard = ({ handleLikes }) => {
  return (
    <>
      <NewGamesList />
      <AllTimeBest handleLikes={handleLikes} />
    </>
  );
};

export default Dashboard;
