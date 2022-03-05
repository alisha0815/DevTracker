import React from "react";
import ApplicationChart from "./ApplicationChart";

const Dashboard = ({ jobs }) => {
  console.log(jobs);
  const filteredStatus = (str) =>
    [...jobs].filter((job) => job.status === str).length;

  return (
    <>
      <h1>This is Deashboard</h1>
      <ul>
        <li>
          <h3>Applied Jobs: {jobs.length}</h3>
        </li>
        <li>
          <h3>Phone-interview: {filteredStatus("phone-interview")}</h3>
        </li>
        <li>
          <h3>Technical interview: {filteredStatus("technical interview")}</h3>
        </li>
        <li>
          <h4>Results</h4>
          <h4>Declined: {filteredStatus("declined")}</h4>
          <h4>Accepted: {filteredStatus("accepted")}</h4>
        </li>
      </ul>
      <div>
        <ApplicationChart jobs={jobs} />
      </div>
    </>
  );
};

export default Dashboard;
