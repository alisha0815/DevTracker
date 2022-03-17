import React, { useState, useEffect } from 'react';

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

const [JobStatus, setJobStatus] = useState([])
const [jobData, setJobData] = useState([])

useEffect(() => {
  filterAll();
},[])

const filterAll = () => {
  const result = jobs.map((job) => {
      return job.status; 
  }).sort()
 
  let unique = [...new Set(result)]
  
  const counts = {}; 
  result.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
  console.log(counts, 'this is a test');
  const array = Object.keys(counts).map(function(key) {return counts[key]}); 
  
  setJobData(array); 
  setJobStatus(unique)
}

// const [array, unique ] = filterAll(jobs); 

const filterPosition = () => {
  const result = jobs.map((job) => {
      return job.position; 
  }).sort()
 
  let unique = [...new Set(result)]
  
  const counts = {}; 
  result.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
  console.log(counts, 'this is a test');
  const array = Object.keys(counts).map(function(key) {return counts[key]}); 
  
  setJobData(array); 
  setJobStatus(unique)
}



const filterCompany = () => {
  const result = jobs.map((job) => {
      return job.company; 
  }).sort()
 
  let unique = [...new Set(result)]
  
  const counts = {}; 
  result.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
  console.log(counts, 'this is a test');
  const array = Object.keys(counts).map(function(key) {return counts[key]}); 
  
  setJobData(array); 
  setJobStatus(unique)
}


  
  return (
    <>
      <DashboardWrapper>
        {/* Summary Panel */}
        <DashboardContainer>
          <DashboardCard>
            <div className='applied'>
              <button className='btn--icon' onClick={() => filterAll()}>
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
              <button className='btn--icon' onClick={() => filterPosition()}>
                <BiIcons.BiLeftArrowCircle />
              </button>
              <div className='filter--num'>
              </div>
              <h3>
                <div className='dashboard--icon'>
                  <BsIcons.BsFillPhoneFill />
                </div>
                <p>Position</p>
              </h3>
            </div>
            <div className='technical'>
              <button className='btn--icon' onClick={() => filterCompany()}>
                <BiIcons.BiLeftArrowCircle />
              </button>
              <div className='filter--num'>
              </div>
              <h3>
                <div className='dashboard--icon'>
                  <BsIcons.BsFillFileCodeFill />
                </div>
                <p>Companies</p>
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
              allJobStatus={JobStatus}
            />
          </div>
        </Graph>
      </DashboardWrapper>
    </>
  );
};

export default Dashboard;
