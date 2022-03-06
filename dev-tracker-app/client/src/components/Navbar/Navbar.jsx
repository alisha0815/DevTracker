import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  const NavBarWrapper = styled.div`
    /* background-color: lightpink; */
  `;
  return (
    <NavBarWrapper>
      <h1>Navbar</h1>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/dashboard">Dashboard</Link>
      </div>
      <div>
        <Link to="/add">Add new job</Link>
      </div>
      <div>
        <Link to="/List">Job List</Link>
      </div>
    </NavBarWrapper>
  );
};

export default Navbar;
