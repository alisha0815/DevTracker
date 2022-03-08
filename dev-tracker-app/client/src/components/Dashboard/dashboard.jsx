import React from "react";
import ApplicationChart from "./ApplicationChart";
import styled from "styled-components";

const Dashboard = ({ jobs }) => {
  console.log(jobs);
  const filteredStatus = (str) =>
    [...jobs].filter((job) => job.status === str).length;

  const DashboardWrapper = styled.div`
    display: flex;
    flex-direction: column;
  `;
  const DashboardContainer = styled.div`
    flex: 2;
  `;

  const Graph = styled.div`
    flex: 3;
    background-color: yellow; // more styling animaiton will be added
  `;

  const DashboardCard = styled.div`
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(auto-fit, 350px);
    /* height: px; */
    justify-content: center;
    padding: 2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    h3,
    h4 {
      text-align: center;
    }
    .applied,
    .phone,
    .technical,
    .results {
      width: 100%;
      height: 100%;
      box-shadow: 6px -1px 20px 0px rgba(0, 0, 0, 0.45);
      border-radius: 20px;
      overflow: hidden;
      margin: 0 auto;
      height: 20vh;
      margin: 2rem;
    }
  `;

  return (
    <>
      <DashboardWrapper>
        <DashboardContainer>
          <DashboardCard>
            <div className="applied">
              <h3>Applied</h3>
              <h4>{jobs.length}</h4>
            </div>
            <div className="phone">
              <h3>Phone Interview</h3>
              <h4>{filteredStatus("phone-interview")}</h4>
            </div>
            <div className="technical">
              <h3>Technical Interview</h3>
              <h4>{filteredStatus("technical interview")}</h4>
            </div>
            <div className="results">
              <h4>Results</h4>
              <h4>Declined: {filteredStatus("declined")}</h4>
              <h4>Accepted: {filteredStatus("accepted")}</h4>
            </div>
          </DashboardCard>
        </DashboardContainer>
        <Graph>
          <div>
            <ApplicationChart jobs={jobs} />
          </div>
        </Graph>
      </DashboardWrapper>
    </>
  );
};

export default Dashboard;
