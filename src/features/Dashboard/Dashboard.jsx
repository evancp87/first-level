import AllTimeBest from "./AllTimeBest";
import FilteredList from "./FilteredList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Dashboard = () => {
  return (
    <>
      <Link to="/search">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </Link>
      <AllTimeBest />
      {/* <FilteredList /> */}
    </>
  );
};

export default Dashboard;
