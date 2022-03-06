import { useEffect, useState } from "react";
import { findAllInRenderedTree } from "react-dom/test-utils";
import { useNavigate } from "react-router-dom";
import { jobService } from "../../service/jobService";

const List = ({ jobs, setJob, setJobs, setIsEditing }) => {
  let navigate = useNavigate();
  const [filteredJobs, setFilteredJobs] = useState([]);
  console.log(filteredJobs);
  const editHandler = (id) => {
    navigate(`/edit/${id}`);
  };

  const deleteHandler = (id) => {
    jobService
      .deleteJob(id)
      .then(() => setJobs(jobs.filter((job) => job.id !== id)));
  };

  const filterPositionHandler = (e) => {
    const position = e.target.value;
    setFilteredJobs(jobs.filter((job) => job.position === position));
  };

  const filterStatusHandler = (e) => {
    const status = e.target.value;
    setFilteredJobs(jobs.filter((job) => job.status === status));
  };
  console.log(filteredJobs);

  return (
    <div>
      <h1>Job List</h1>
      <div>
        <button value="all" onClick={() => setFilteredJobs(jobs)}>
          All
        </button>
        <button value="frontend" onClick={(e) => filterPositionHandler(e)}>
          Frontend
        </button>
        <button value="backend" onClick={(e) => filterPositionHandler(e)}>
          Backend
        </button>
        <button value="fullstack" onClick={(e) => filterPositionHandler(e)}>
          Fullstack
        </button>
      </div>
      <div>
        <button value="applied" onClick={(e) => filterStatusHandler(e)}>
          Applied
        </button>
        <button value="phone-interview" onClick={(e) => filterStatusHandler(e)}>
          Phone interview
        </button>
        <button
          value="technical interview"
          onClick={(e) => filterStatusHandler(e)}
        >
          Technical Interview
        </button>
        <button value="decliend" onClick={(e) => filterStatusHandler(e)}>
          Declined
        </button>
        <button value="accepted" onClick={(e) => filterStatusHandler(e)}>
          Accepted
        </button>
      </div>

      <ul>
        <h1>Company</h1>
        {filteredJobs.map((job) => (
          <ul key={job.id}>
            <div>
              <li>
                <h1>{job.company}</h1>
              </li>
              <li>{job.position}</li>
              <li>{job.status}</li>
              <button onClick={() => editHandler(job.id)}>EDIT</button>
              <button onClick={() => deleteHandler(job.id)}>DELET</button>
              {/* <EditForm id={job.id} job={job} setJob={setJob} /> */}
            </div>
          </ul>
        ))}
      </ul>
    </div>
  );
};

export default List;
