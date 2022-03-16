import React, { useState } from 'react';

import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as BiIcons from 'react-icons/bi';
import styled from 'styled-components';
import {
  faCircleCheck,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import COLORS from '../../styles/styled.constants';
import OverviewChart from './OverviewChart';
<i class='fa-solid fa-arrow-left-long-to-line'></i>;
const DashboardWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: row-reverse;
`;
const DashboardContainer = styled.div`
  flex: 1;
`;

const Graph = styled.div`
  flex: 3;
  flex-direction: column;
  padding-top: 2rem;

  .chart--img {
  }

  .chart {
    opacity: 0;
    transition: all ease-in-out 250ms;
  }

  .chart.active {
    opacity: 1;
    transition: all ease-in-out 250ms;
  }
`;

const DashboardCard = styled.div`

  justify-content: center;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  h3,
  h4 {
    text-align: center;
  }
  .btn--icon {
    font-size: 2rem;
    font-weight: 800;
  }
  .applied,
  .phone,
  .technical,
  .results {
    padding-right: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    box-shadow: 6px -1px 20px 0px rgba(0, 0, 0, 0.45);
    border-radius: 20px;
    overflow: hidden;
    margin: 0.7rem;
    padding-left: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    height: 20vh;
  }
  .results {
    background-color: ${COLORS.button};
    color: white;
    .filter--num {
      color: ${COLORS.background};
    }
    div {
      padding: 0;
    }
    .btn--icon {
      color: white;
      font-size: 2rem;
      font-weight: 800;
    }
  }
  .filter--num {
    flex: 1; 
    text-align: center;
    padding-left: 1rem;
    margin: 0 auto;
    font-weight: 900;
    color: ${COLORS.button};
    font-size: 3rem;
  }
  h3 {
    flex: 3;
  }
`;

const Dashboard = ({ jobs }) => {


  const filteredStatus = str =>
    [...jobs].filter(job => job.status === str).length

  console.log(filteredStatus, '//----> Filtered status on Dashboard' )

  const allJobStatus = []
  const filterApplied = () => {
    jobs.forEach((job)=> {
      if(!allJobStatus.includes(job.status)){
        allJobStatus.push(job.status); 
      }
    }) 
  }
  filterApplied(); 

  console.log(allJobStatus, " JOB STATUS FROM OVERVIEW")


  const filteredJobs = (status) =>
    jobs.filter((job) => job.status === status).length;

  const status = [
    "phone-interview",
    "technical interview",
    "declined",
    "accepted",
    "interested", 
    "applied"
  ];

  const jobData = status.map((el) => filteredJobs(el));
  console.log(jobData);

  const progressData = jobData
    .map((job) => (job / jobs.length) * 100)
    .map((item) => item.toFixed(2));

  
  return (
    <>
      <DashboardWrapper>
        {/* Summary Panel */}
        <DashboardContainer>
          <DashboardCard>
            <div className='applied'>
              <button className='btn--icon' onClick={() => filterApplied()}>
                <BiIcons.BiLeftArrowCircle />
              </button>
              <div className='filter--num'>{jobs.length}</div>
              <h3>
                <div className='dashboard--icon'>
                  <AiIcons.AiFillFileAdd />
                </div>
                <p>Overview</p>
              </h3>
            </div>
            <div className='phone'>
              <button className='btn--icon' onClick={() => console.log('yup')}>
                <BiIcons.BiLeftArrowCircle />
              </button>
              <div className='filter--num'>
                {filteredStatus('phone-interview')}
              </div>
              <h3>
                <div className='dashboard--icon'>
                  <BsIcons.BsFillPhoneFill />
                </div>
                <p>Phone Interview</p>
              </h3>
            </div>
            <div className='technical'>
              <button className='btn--icon'>
                <BiIcons.BiLeftArrowCircle />
              </button>
              <div className='filter--num'>
                {filteredStatus('technical interview')}
              </div>
              <h3>
                <div className='dashboard--icon'>
                  <BsIcons.BsFillFileCodeFill />
                </div>
                <p>Technical Interview</p>
              </h3>
            </div>
            <div className='results'>
              <button className='btn--icon'>
                <BiIcons.BiLeftArrowCircle />
              </button>
              <div className='filter--num'>
                <div>
                  <FontAwesomeIcon icon={faCircleXmark} />
                </div>
                {filteredStatus('declined')}
              </div>
              <div className='filter--num'>
                <div>
                  <FontAwesomeIcon icon={faCircleCheck} />{' '}
                </div>
                {filteredStatus('accepted')}
              </div>
            </div>
          </DashboardCard>
        </DashboardContainer>
        <Graph>
          <div>
            <OverviewChart
              jobData={jobData} 
              allJobStatus={allJobStatus}
            />
          </div>
        </Graph>
      </DashboardWrapper>
    </>
  );
};

export default Dashboard;
