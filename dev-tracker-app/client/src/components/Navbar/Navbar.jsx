import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SidebarData } from "./SideBarData";
// import styled from "styled-components";
// import COLORS from "../../styles/styled.constants";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import COLORS from "../../styles/styled.constants";
import Login from "../Login/Login"

const NavbarWrapper = styled.div`
/* display: flex; */
display: inline-block;
/* height: 100vh; */
width: 100%;
justify-content: start;
align-items: center;
.logo {
  position: absolute;
  right: 30px;
  top: 20px;
  color: ${COLORS.button};
  h2 {
    font-size: 2.8em;
    font-weight: bolder;
  }
}
.menu-bars {
  margin-left: 2rem;
  font-size: 2rem;
  background: none;
  transition: all 0.5s ease-in-out;
}

.close-bars {
  font-size: 1.8rem;
  background: none;
  position: absolute;
  right: 1.3rem;
}
.nav-menu {
  z-index: 100;
  background-color: #060b26;
  width: 14rem;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: -100%;
  transition: 850ms;
}
.nav-menu.active {
  z-index: 100;
  left: 0;
  transition: 350ms;
}
.nav-text {
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 8px 0px 8px 16px;
  list-style: none;
  height: 60px;
}

.nav-text a {
  text-decoration: none;
  color: #f5f5f5;
  font-size: 1em;
  width: 95%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 16px;
  border-radius: 4px;
}

.nav-text a:hover {
  background-color: gray;
}

.nav-menu-items {
  width: 100%;
}

.navbar-toggle {
  background-color: #060b26;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: start;
  align-items: center;
}

span {
  margin-left: 0.7rem;
}
`;

const Navbar = () => {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const hideSidebar = () => setSidebar(false);


  const [loggedIn, setLoggedIn] = useState(null)
  
  useEffect(() =>{
    localStorage.getItem('uid') ? setLoggedIn(true) : setLoggedIn(false)
  },[loggedIn])

  const userPhoto = localStorage.getItem('userPhoto')
  const userName = localStorage.getItem('userName')
  const email = localStorage.getItem('email')

  return (

    <NavbarWrapper>
      <Link to="#" className="menu-bars">
        <FaIcons.FaBars onClick={showSidebar} />
      </Link>
      <div className="logo">
        <h2>DevT</h2>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
       <div className="logo">
        <h2>DevT</h2>
        {console.log(localStorage.getItem('uid'), 'USER ID STORAGE')}
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <Link to="#" className="close-bars" onClick={showSidebar}>
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
        { loggedIn ? (
          <div>
          <img src={userPhoto} alt="user" style={{borderRadius: '50px'}}></img> 
          <p>{userName}</p>
          <p>{email}</p>
          </div>
        ): (<div></div>)}
          <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn}></Login>
          {loggedIn ? ( 
            
            SidebarData.map((item, index) => {
            return (

              <li key={index} className={item.cName}>
              
                <Link to={item.path} onClick={() => hideSidebar()}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })) : (<p>Please log in to see the information of your Dashboard</p>)} 
        </ul>
      </nav>
      </nav>
    </NavbarWrapper>
  );
};

export default Navbar;
