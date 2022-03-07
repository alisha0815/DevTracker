import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import COLORS from "../../styles/styled.constants";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const NavWrapper = styled.div`
    width: 100%;
    height: 10vh;
  `;
  const NavbarContainer = styled.ul`
    position: fixed;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    font-size: 1.4em;
    font-weight: 500;
    margin-top: 2rem;
  `;

  const Logo = styled.li`
    margin-left: 10rem;
    line-height: 3rem;
    :hover {
      border-bottom: 1px solid ${COLORS.button};
    }
  `;

  const Menu = styled.ul`
    display: flex;
  `;

  const Item = styled.li`
    color: ${COLORS.button};
    padding: 0;
    margin-right: 4.5rem;
    line-height: 3rem;
    :hover {
      border-bottom: 1px solid ${COLORS.button};
    }
  `;
  return (
    <NavWrapper>
      <NavbarContainer>
        <Logo>
          <Link to="/">DEV T</Link>
        </Logo>
        <Menu>
          <Item>
            <Link to="/dashboard">Dashboard</Link>
          </Item>
          <Item>
            <Link to="/List">Job List</Link>
          </Item>
          <Item>
            <Link to="/add">Add new job</Link>
          </Item>
        </Menu>
      </NavbarContainer>
    </NavWrapper>
  );
};

export default Navbar;
