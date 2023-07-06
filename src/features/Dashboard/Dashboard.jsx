import React from "react";
import AllTimeBest from "./AllTimeBest";
import FilteredList from "./FilteredList";

const Dashboard = () => {
  return (
    <>
      <FilteredList />
      <AllTimeBest />
    </>
  );
};

export default Dashboard;
