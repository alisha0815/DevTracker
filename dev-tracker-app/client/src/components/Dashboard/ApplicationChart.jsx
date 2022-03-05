import React from "react";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
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

  return (
    <div>
      <Doughnut
        height={400}
        width={400}
        options={{
          maintainAspectRatio: false,
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
    </div>
  );
};

export default ApplicationChart;
