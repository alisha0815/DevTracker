import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import jobService from '../../service/jobService';
import COLORS from '../../styles/styled.constants';
import { Link } from 'react-router-dom';

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
  const [selectedJob, setSelectedJob] = useState(
    jobs.find(job => job._id === id)
  );
  let navigate = useNavigate();

  const editHandler = async e => {
    e.preventDefault();

    const newJob = {
      _id: selectedJob._id,
      company: e.target.company.value,
      position: e.target.position.value,
      status: e.target.status.value,
      date_applied: e.target.date_applied.value,
      date_interview: e.target.date_interview.value,
    };
    await jobService
      .updateJob(newJob)
      .then(res => {
        const response = res.json();
        return response;
      })
      .then(data => {
        triggerUpdate(Math.random());
        navigate('/list');
      })
      .catch(console.error);
  };

  return (
    <UpdateForm>
      <form onSubmit={editHandler}>
        <h3>Edit your job</h3>
        <div>
          <label htmlFor='company'>Company</label>
          <input
            id='company'
            type='text'
            name='company'
            defaultValue={selectedJob.company}
          />
          <label htmlFor='position'>Position</label>
          <select name='position' defaultValue={selectedJob.position}>
            <option value='frontend'>frontend</option>
            <option value='backend'>backend</option>
            <option value='fullstack'>fullstack</option>
          </select>
          <label htmlFor='status'>Status</label>
          <select name='status' defaultValue={selectedJob.status}>
            <option value='interested'>interested</option>
            <option value='applied'>applied</option>
            <option value='phone-interview'>phone-interview</option>
            <option value='technical interview'>technical interview</option>
            <option value='declined'>declined</option>
            <option value='accepted'>accepted</option>
          </select>
          <label htmlFor='date_applied'>Date Applied</label>
          <input
            name='date_applied'
            type='datetime-local'
            defaultValue={selectedJob.date_applied}
          />
          <label htmlFor='date_interview'>Date Interview</label>
          <input
            name='date_interview'
            type='datetime-local'
            defaultValue={selectedJob.date_interview}
          />
          <EditButton>
            <button className='add--btn'>Edit</button>
            <Link to={'/list'}>
              <button className='cancel--btn'>Cancel</button>
            </Link>
          </EditButton>
        </div>
      </form>
    </UpdateForm>
  );
};

export default EditForm;
