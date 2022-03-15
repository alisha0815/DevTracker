import React from "react";
import "chart.js/auto";
// import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import OverviewChart from "./OverviewChart";
// import TotalApplicationChart from "./TotalApplicationChart";
Chart.register(ArcElement);

const ApplicationChart = ({ jobs }) => {
  const filteredJobs = (status) =>
    jobs.filter((job) => job.status === status).length;
  const status = [
    "phone-interview",
    "technical interview",
    "declined",
    "accepted",
  ];
  const jobData = status.map((el) => filteredJobs(el));
  console.log(jobData);

  const progressData = jobData
    .map((job) => (job / jobs.length) * 100)
    .map((item) => item.toFixed(2));

  console.log(progressData);

  return (
    <>
      <OverviewChart jobData={jobData} />

      {/* data rendering didnt work properly so should be done later */}

      {/* <TotalApplicationChart progressData={progressData} /> */}

      {/* // Progress chart */}
      {/* <div>
        <Doughnut
          height={400}
          width={400}
          options={{
            maintainAspectRatio: false,
            plugins: {
              title: {
                display: true,
                text: "Phone Interview",
                fontSize: 28,
                padding: {
                  top: 10,
                  bottom: 30,
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
                backgroundColor: ["#FAFAFA", "#E7E8CC"],
              },
            ],
          }}
        />
      </div> */}
      {/* // Progress chart --Technical Interivew*/}
      {/* <div>
        <Doughnut
          height={400}
          width={400}
          options={{
            maintainAspectRatio: false,
            plugins: {
              title: {
                display: true,
                text: "Technical Interview",
                fontSize: 28,
                padding: {
                  top: 10,
                  bottom: 30,
                },
              },
            },
          }}
          data={{
            labels: ["Job Applied", "Technical Interview"],
            datasets: [
              {
                label: "Phone Interview / Job Applied",
                data: [100, progressData[1]],
                backgroundColor: ["#FAFAFA", "#D1E9EA"],
              },
            ],
          }}
        />
      </div> */}
      {/* // Progress chart --Accepted*/}
      {/* <div>
        <Doughnut
          height={400}
          width={400}
          options={{
            maintainAspectRatio: false,
            plugins: {
              title: {
                display: true,
                text: "Technical Interview",
                fontSize: 28,
                padding: {
                  top: 10,
                  bottom: 30,
                },
              },
            },
          }}
          data={{
            labels: ["Job Applied", "Accepted"],
            datasets: [
              {
                label: "Accepted / Job Applied",
                data: [100, progressData[3]],
                backgroundColor: ["#FAFAFA", "#E8CDCC"],
              },
            ],
          }}
        />
      </div> */}
    </>
  );
};

export default ApplicationChart;
