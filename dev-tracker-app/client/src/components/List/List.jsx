import React from "react";

const List = ({ jobs }) => {
  return (
    <div>
      <h1>Job List</h1>
      <ul>
        <h1>Company</h1>
        {jobs.map((job) => (
          <li key={job.id}>{job.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
