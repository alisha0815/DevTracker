import React from "react";
import Navbar from "../Navbar/Navbar";
import Landing from "./Landing";
import styled from "styled-components";

const Home = () => {
  const HomeWrapper = styled.div`
    /* background-color: blue; */
    /* display: flex; */
    width: 100%;
  `;
  return (
    <HomeWrapper>
      <Navbar />
      <Landing />
    </HomeWrapper>
  );
};

export default Home;
