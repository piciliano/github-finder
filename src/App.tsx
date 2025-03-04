import { Link, Outlet } from "react-router-dom";

import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.app}>
      <h1>
        <Link to="/">GitHub Finder</Link>
      </h1>
      <Outlet />
    </div>
  );
}

export default App;
