import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addNewJob } from "../../redux/actions/jobsActions";
import { jobService } from "../../service/jobService";
// import List from "../List/List";

const Add = ({ job, setJob, jobs, setJobs, isEditing }) => {
  //   const jobItems = useSelector((state) => state.jobs);
  //   const dispatch = useDispatch();

  const inputHandler = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setJob({
      ...job,
      [e.target.name]: value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const { company, position, status } = e.target;

    // if(isEditing)
    const newJob = await jobService.createJob(
      company.value,
      position.value,
      status.value
    );
    setJobs([newJob, ...jobs]);
    // dispatch(addNewJob(company.value, position.value, status.value));
    await jobService.createJob(company.value, position.value, status.value);
    setJob({ company: "", position: "", status: "" });
  };
  return (
    <div>
      <h1>Add New Job</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="company">Company</label>
          <input
            type="text"
            name="company"
            value={job.company}
            onChange={inputHandler}
          />
          <label htmlFor="position">Position</label>
          <input
            type="text"
            name="position"
            value={job.position}
            onChange={inputHandler}
          />
          <label htmlFor="status">Status</label>
          <select name="status">
            <option value="interested">interested</option>
            <option value="applied">applied</option>
            <option value="phone-interview">phone-interview</option>
            <option value="technical interview">technical interview</option>
            <option value="declined">declined</option>
            <option value="accepted">accepted</option>
          </select>
          <button>CREATE</button>
        </div>
      </form>
    </div>
  );
};

export default Add;
