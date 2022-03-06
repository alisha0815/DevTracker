import React from "react";
import styled from "styled-components";

const Landing = () => {
  const LandingWrapper = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    .left {
      flex: 2;
      /* justify-content: center;
      align-items: center; */
      /* background-color: lightgreen; */
      margin: auto;
      h1 {
        font-size: 5em;
        font-weight: 1000;
        text-align: center;
      }
      h3 {
        line-height: 3rem;
        padding-top: 2rem;
        font-weight: 300;
        font-size: 2em;
        max-width: 80%;
        text-align: center;
        margin: 0 auto;
      }
    }
    .right {
      /* background-color: gray; */
      flex: 1;
    }
  `;

  return (
    <LandingWrapper>
      <div className="left">
        <h1>Dev tracker</h1>
        <div className="subtitle">
          <h3>
            Make your move. Have your job applications organized. Let's get
            started!
          </h3>
        </div>
      </div>
      <div className="right">
        <p>image here</p>
      </div>
    </LandingWrapper>
  );
};

export default Landing;
