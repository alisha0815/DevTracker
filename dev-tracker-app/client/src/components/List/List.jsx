import React from "react";

const List = ({ jobs }) => {
  return (
    <div>
      <h1>Job List</h1>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>{job.company}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
