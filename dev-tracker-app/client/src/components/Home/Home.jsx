import React from "react";
import Landing from "./Landing";
import styled from "styled-components";

const HomeWrapper = styled.div`
width: 100%;
`;

const Home = () => {

  return (
    <HomeWrapper>
      <Landing />
    </HomeWrapper>
  );
};

export default Home;
