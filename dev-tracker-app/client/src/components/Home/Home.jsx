import React from "react";
import Landing from "./Landing";
import styled from "styled-components";

const Home = () => {
  const HomeWrapper = styled.div`
    width: 100%;
  `;
  return (
    <HomeWrapper>
      <Landing />
    </HomeWrapper>
  );
};

export default Home;
