import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { jobService } from "../../service/jobService";
import COLORS from "../../styles/styled.constants";
import { Link } from "react-router-dom";

const UpdateForm = styled.div`
box-shadow: 6px -1px 20px 0px rgba(0, 0, 0, 0.45);
border-radius: 20px;
padding-top: 2rem;
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
width: 50%;
max-width: 50%;
margin: 0 auto;
h3 {
  text-align: center;
  color: ${COLORS.button};
  font-weight: bolder;
}
`;

const EditButton = styled.div`
text-align: center;
.add--btn,
.cancel--btn {
  width: 130px;
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  margin-bottom: 1rem;
}
.cancel--btn {
  background-color: white;
  color: ${COLORS.button};
  border: 1px solid ${COLORS.button};
}
`;


const EditForm = ({ jobs, triggerUpdate }) => {
  const { id } = useParams();
  const [updatedJob, setUpdatedJob] = useState(
    jobs.find((job) => job.id === id)
  );
  let navigate = useNavigate();

  const editHandler = async (e) => {
    e.preventDefault();
    const { company, position, status, date_applied, date_interview } =
      e.target;
    setUpdatedJob({
      id: id,
      company: company.value,
      position: position.value,
      status: status.value,
      date_applied: date_applied.value,
      date_interview: date_interview.value,
    });

    jobService
      .updateJob(
        id,
        company.value,
        position.value,
        status.value,
        date_applied.value,
        date_interview.value
      )
      .then((res) => res.json())
      .then((data) => {
        triggerUpdate(Math.random());
        console.log(data);
        navigate("/list");
      })
      .catch(console.error);
  };

 

  return (
    <UpdateForm>
      <form onSubmit={editHandler}>
        <h3>Edit your job</h3>
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
          <label htmlFor="date_applied">Date Applied</label>
          <input
            name="date_applied"
            type="datetime-local"
            defaultValue={updatedJob.date_applied}
          />
          <label htmlFor="date_interview">Date Interview</label>
          <input
            name="date_interview"
            type="datetime-local"
            defaultValue={updatedJob.date_interview}
          />
          <EditButton>
            <button className="add--btn">Edit</button>
            <Link to={"/list"}>
              <button className="cancel--btn">Cancel</button>
            </Link>
          </EditButton>
          {/* <button>EDIT</button> */}
        </div>
      </form>
    </UpdateForm>
  );
};

export default EditForm;
