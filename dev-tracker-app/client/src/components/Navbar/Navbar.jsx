import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <h1>Navbar</h1>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/dashbaord">Dashboard</Link>
      </div>
      <div>
        <Link to="/add">Add new job</Link>
      </div>
      <div>
        <Link to="/List">Job List</Link>
      </div>
    </>
  );
};

export default Navbar;
