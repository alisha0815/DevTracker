import React from "react";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import styled from "styled-components";
Chart.register(ArcElement);

const OverviewWrapper = styled.div`
position: relative;
`;
const GraphWrapper = styled.div`
width: 60%;
text-align: center;
height: 70vh;
box-shadow: 6px -1px 20px 0px rgba(0, 0, 0, 0.45);
border-radius: 20px;
padding: 2rem;
position: absolute;
left: 50%;
transform: translateX(-50%);
background-color: white;
`;

const TotalApplicationChart = ({ progressData }) => {

  return (
    <OverviewWrapper>
      <GraphWrapper>
        <Doughnut
          height={200}
          width={200}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              title: {
                display: true,
                text: "Phone Interview",
                padding: {
                  top: 10,
                  bottom: 30,
                },
                font: {
                  size: 28,
                },
              },
              legend: {
                labels: {
                  font: {
                    size: 20,
                  },
                },
              },
            },
          }}
          data={{
            labels: ["Job Applied", "Phone Interview"],
            datasets: [
              {
                label: "Phone Interview / Job Applied",
                data: [100, progressData[0]],
                backgroundColor: ["#FEDBDD", "#FFF1E3"],
              },
            ],
          }}
        />
      </GraphWrapper>
    </OverviewWrapper>
  );
};

export default TotalApplicationChart;
