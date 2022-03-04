import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { jobService } from "../../service/jobService";

const EditForm = ({ jobs, triggerUpdate }) => {
  const { id } = useParams();
  const [updatedJob, setUpdatedJob] = useState(
    jobs.find((job) => job.id === id)
  );

  const editHandler = async (e) => {
    e.preventDefault();
    const { company, position, status } = e.target;
    console.log(company.value, position.value, status.value);
    setUpdatedJob({
      id: id,
      company: company.value,
      position: position.value,
      status: status.value,
    });

    jobService
      .updateJob(id, company.value, position.value, status.value)
      .then((res) => res.json())
      .then((data) => {
        // KOSTAS: we update the `update` state of App via the `triggerUpdate` with a new random value, in order to trigger the useEffect of App
        triggerUpdate(Math.random());
        console.log(data);
      })
      .catch(console.error);
  };

  //   const inputHandler = (e) => {
  //     e.preventDefault();
  // const value = e.target.value;
  // setJob({
  //   ...updatedJob,
  //   [e.target.name]: value,
  // });
  //   };

  return (
    <div>
      <h4>Edit your job</h4>
      <form onSubmit={editHandler}>
        <div>
          <label htmlFor="company">Company</label>
          <input type="text" name="company" defaultValue={updatedJob.company} />
          <label htmlFor="position">Position</label>
          <select name="position" defaultValue={updatedJob.position}>
            <option value="frontend">frontend</option>
            <option value="backend">backend</option>
            <option value="fullstack">fullstack</option>
          </select>
          <label htmlFor="status">Status</label>
          <select name="status" defaultValue={updatedJob.status}>
            <option value="interested">interested</option>
            <option value="applied">applied</option>
            <option value="phone-interview">phone-interview</option>
            <option value="technical interview">technical interview</option>
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
