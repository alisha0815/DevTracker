import react, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import jobService from '../../service/jobService';

import { Btn } from './Btn';
import { Card } from '../Card/Card';
const ListWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const ListButton = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.2em;
`;

const PositionButton = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
`;

const CardWrapper = styled.div`
  padding: 3rem;
  .card--section {
    padding-left: 1.2rem;
  }
  .update {
    display: flex;
    justify-content: flex-end;
    font-size: 1rem;
    padding-right: 2rem;
    padding-top: 1.4rem;
    font-style: italic;
  }
`;

const List = ({ jobs, setJobs }) => {
  let navigate = useNavigate();
  const [filter, setFilter] = useState(null);
  console.log('JOBS', jobs);
  const editHandler = id => {
    navigate(`/edit/${id}`);
  };

  const deleteHandler = async id => {
    await jobService
      .deleteJob(id)
      .then(() => setJobs(jobs.filter(job => job.id !== id)));
    const alteredJobs = jobs.filter(job => job._id !== id);
    setJobs(alteredJobs);
  };

  const btnValues = [
    'all',
    'frontend',
    'backend',
    'fullstack',
    'applied',
    'phone-interview',
    'technical interview',
    'declined',
    'accepted',
    'interested',
  ];
  return (
    <>
      <ListWrapper>
        <ListButton>
          <PositionButton>
            {btnValues.map(value => {
              return (
                <p>
                  <Btn value={value} setFilter={setFilter}></Btn>
                </p>
              );
            })}
          </PositionButton>
        </ListButton>

        <CardWrapper>
          {jobs
            .filter(job => {
              if (filter === null) {
                return job;
              }
              return job.position === filter || job.status === filter;
            })
            .map(job => {
              return (
                <Card
                  job={job}
                  editHandler={editHandler}
                  deleteHandler={deleteHandler}></Card>
              );
            })}
        </CardWrapper>
      </ListWrapper>
    </>
  );
};

export default List;
