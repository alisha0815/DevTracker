import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { jobService } from "../../service/jobService";

const EditForm = ({ job, jobs, setJob }) => {
  const { id } = useParams();
  const [updatedJob, setUpdatedJob] = useState(
    jobs.find((job) => job.id === id)
  );

  console.log(updatedJob);

  const inputHandler = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setJob({
      ...updatedJob,
      [e.target.name]: value,
    });
  };

  // const editHandler = (e, id) => {
  //     const { company, position, status } = e.target;
  //     setUpdatedJob({ id, company, position, status })//set state asyncrronous
  //     jobService.updateJob(id, company, position, status)
  // .then(() => setJob(updatedJob));//catch
  // };

  return (
    <div>
      <h1>Edit your job</h1>
      <form>
        <div>
          <label htmlFor="company">Company</label>
          <input
            type="text"
            name="company"
            defaultValue={updatedJob.company}
            onChange={inputHandler}
          />
          <label htmlFor="position">Position</label>
          <input
            type="text"
            name="position"
            defaultValue={updatedJob.position}
            // value={position}
            onChange={inputHandler}
          />
          <label htmlFor="status">Status</label>
          <select
            name="status"
            defaultValue={updatedJob.status}
            onChange={inputHandler}
          >
            <option value="interested">interested</option>
            <option value="pending">pending</option>
            <option value="ghosted">ghosted</option>
            <option value="interview">interview</option>
            <option value="declined">declined</option>
            <option value="accepted">accepted</option>
          </select>
          <button>EDIT</button>
        </div>
      </form>
    </div>
  );
};

export default EditForm;
