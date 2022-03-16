import moment from 'moment';
import react, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import jobService from '../../service/jobService';
import COLORS from '../../styles/styled.constants';
import {
  faPenToSquare,
  faTrashCan,
  faBuilding,
  faCode,
  faCalendarDays,
  faBell,
  faRepeat,
  faClipboard,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SubTitle } from 'chart.js';

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
`;

const StatusButton = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const TagButton = styled.button`
  border: 1px solid ${COLORS.button};
  margin: 0.5em;
  padding: 0.3em;
  width: 150px;
  height: 80px;
  border-radius: 30px;
  background-color: white;
  color: ${COLORS.button};
  :hover {
    background-color: ${COLORS.button};
    color: white;
  }
`;

const Icon = styled.div`
  font-size: 1.5em;
  /* display: inline-block;
text-align: center;
margin: 0 auto; */
`;

const CompanyList = styled.div`
box-shadow: 6px -1px 20px 0px rgba(0, 0, 0, 0.45);
border-radius: 15px;
width: 100%;
display: flex;
justify-content: center;
.company--title {
  font-size: 1.8em;
  text-align: center;
  padding: 1.2rem;
} 
  h2 {
    padding-left: 1.2rem;
    display: inline-block;
  }
}
`;

const CompanyWrapper = styled.div`
  width: 100%;
  font-size: 1.2em;
`;

const CompanyContainer = styled.div`
  align-items: start;
  display: grid;
  grid-gap: 36px;
  grid-template-columns: repeat(auto-fit, 500px);
  height: 700px;
  justify-content: center;
  padding: 2rem;
  .sub--icon {
    color: ${COLORS.button};
  }
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

const CompanySubTitle = styled.div`
  display: inline-block;
  padding-left: 1.5rem;
  span {
    padding-left: 1rem;
  }
`;

const CompanyCardButton = styled.div`
  padding-top: 1rem;
  padding-bottom: 1.4rem;
  display: flex;
  justify-content: space-evenly;
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

  return (
    <>
      <ListWrapper>
        <ListButton>
          <PositionButton>
            <TagButton
              className='tag--btn'
              value='all'
              onClick={() => setFilter(null)}>
              All
            </TagButton>
            <TagButton
              className='tag--btn'
              value='frontend'
              onClick={e => setFilter('frontend')}>
              {' '}
              Frontend
            </TagButton>
            <TagButton
              className='tag--btn'
              value='backend'
              onClick={e => setFilter('backend')}>
              {' '}
              Backend
            </TagButton>
            <TagButton
              className='tag--btn'
              value='fullstack'
              onClick={e => setFilter('fullstack')}>
              {' '}
              Fullstack
            </TagButton>
          </PositionButton>
          <StatusButton>
            <TagButton
              className='tag--btn'
              value='applied'
              onClick={e => setFilter('pending')}>
              {' '}
              Pending
            </TagButton>
            <TagButton
              className='tag--btn'
              value='phone-interview'
              onClick={e => setFilter('phone interview')}>
              {' '}
              Phone interview
            </TagButton>
            <TagButton
              className='tag--btn'
              value='technical interview'
              onClick={e => setFilter('technical interview')}>
              {' '}
              Technical Interview
            </TagButton>
            <TagButton value='declined' onClick={e => setFilter('decline')}>
              {' '}
              Declined
            </TagButton>
            <TagButton
              className='tag--btn'
              value='accepted'
              onClick={e => setFilter('accepted')}>
              {' '}
              Accepted
            </TagButton>
            <TagButton
              className='tag--btn'
              value='interested'
              onClick={e => setFilter('interested')}>
              {' '}
              Interested
            </TagButton>
          </StatusButton>
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
              console.log('INSIDE THE COMPONENT', job);
              return (
                <CompanyList key={job._id}>
                  <CompanyWrapper>
                    <div className='card--section'>
                      <li>
                        <div className='company--title'>
                          {' '}
                          <FontAwesomeIcon
                            icon={faBuilding}
                            className='sub--icon'
                          />
                          <h2>{job.company}</h2>
                        </div>
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faCode} className='sub--icon' />
                        <CompanySubTitle>{job.position}</CompanySubTitle>
                      </li>
                      <li>
                        {' '}
                        <FontAwesomeIcon
                          icon={faClipboard}
                          className='sub--icon'
                        />
                        <CompanySubTitle> {job.status}</CompanySubTitle>
                      </li>

                      {job.date_applied && (
                        <li>
                          <FontAwesomeIcon
                            icon={faCalendarDays}
                            className='sub--icon'
                          />
                          <CompanySubTitle>Applied :</CompanySubTitle>
                          <span>{moment(job.date_applied).format('ll')}</span>
                        </li>
                      )}

                      {job.date_interview && (
                        <>
                          <h4>
                            <FontAwesomeIcon
                              icon={faBell}
                              className='sub--icon'
                            />
                            <span>
                              {moment(job.date_interview).format('llll')}
                            </span>
                          </h4>
                        </>
                      )}
                    </div>
                    <li className='update'>
                      <FontAwesomeIcon icon={faRepeat} />
                      Last update{' '}
                      {moment(job.updatedAt).startOf('day').fromNow()}
                    </li>

                    <CompanyCardButton>
                      <Icon>
                        <button onClick={() => editHandler(job._id)}>
                          <FontAwesomeIcon icon={faPenToSquare} />
                        </button>
                      </Icon>
                      <Icon>
                        <button onClick={() => deleteHandler(job._id)}>
                          <FontAwesomeIcon icon={faTrashCan} />
                        </button>
                      </Icon>
                    </CompanyCardButton>
                  </CompanyWrapper>
                </CompanyList>
              );
            })}
          {/* </CompanyContainer> */}
        </CardWrapper>
      </ListWrapper>
    </>
  );
};

// comment for github testing
export default List;
