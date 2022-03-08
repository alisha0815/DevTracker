import React from "react";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import styled from "styled-components";
Chart.register(ArcElement);

const OverviewChart = ({ jobData }) => {
  const OverviewWrapper = styled.div`
    width: 100%;
    position: relative;
  `;
  const GraphWrapper = styled.div`
    width: 60%;
    text-align: center;
    height: 70vh;
    box-shadow: 6px -1px 20px 0px rgba(0, 0, 0, 0.45);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    /* overflow: hidden; */
  `;
  return (
    <OverviewWrapper>
      <h1>This is overview chart</h1>
      <GraphWrapper>
        <Doughnut
          // height={50}
          // width={50}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              title: {
                display: true,
                text: "Job Application Tracker",
                padding: {
                  top: 10,
                  bottom: 30,
                },
              },
            },
          }}
          data={{
            labels: [
              "Phone Interview",
              "Technical-Interview",
              "Declined",
              "Accepted",
            ],
            datasets: [
              {
                label: "Job application",
                data: jobData,
                backgroundColor: ["#E8CDCC", "#D1E9EA", "#D3CCE8", "#E7E8CC"],
              },
            ],
          }}
        />
      </GraphWrapper>
    </OverviewWrapper>
  );
};

export default OverviewChart;
