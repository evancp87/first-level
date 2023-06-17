import { useState } from "react";
import AllTimeBest from "./AllTimeBest";
import FilteredList from "./FilteredList";
const Dashboard = () => {
  return (
    <>
      <AllTimeBest />
      <FilteredList />
    </>
  );
};

export default Dashboard;
