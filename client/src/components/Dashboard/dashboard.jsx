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
  .dashboard--icon{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
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
  
  .chart-navigation{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #ebebeb;
    border-radius: 3px; 
    padding: 1rem; 
    width: 100%;
    min-width: 20rem;
    margin: 1rem;  
  }

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
    flex: 0.5; 
    text-align: center;
    font-weight: 900;
    color: ${COLORS.button};
    font-size: 2rem;
  }
  h3 {
    margin:0px; 
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
            <div className='chart-navigation'>
              <div>
                <button onClick={() => filterAll()}><BiIcons.BiLeftArrowCircle /></button>
              </div>
              <div className='filter--num'>{jobs.length}</div>
              <div className='dashboard--icon' ><h3>Overview</h3></div>
            </div>

            <div className='chart-navigation'>
            <div>
              <button  onClick={() => filterPosition()}><BiIcons.BiLeftArrowCircle /></button>
            </div>
              <div className='filter--num'> <BsIcons.BsFillPhoneFill /> </div>
              <div className='dashboard--icon' ><h3>Position</h3></div>
            </div>

            <div className='chart-navigation'>
              <div>
                <button onClick={() => filterCompany()}><BiIcons.BiLeftArrowCircle /></button>
              </div>
              <div className='filter--num'><BsIcons.BsFillFileCodeFill /></div>
                <div className='dashboard--icon'><h3>Companies</h3></div></div>

            <div className='chart-navigation'>
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
