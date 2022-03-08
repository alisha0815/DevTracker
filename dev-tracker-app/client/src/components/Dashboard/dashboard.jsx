import React from "react";
import ApplicationChart from "./ApplicationChart";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as BiIcons from "react-icons/bi";

import styled from "styled-components";
import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
<i class="fa-solid fa-arrow-left-long-to-line"></i>;
const Dashboard = ({ jobs }) => {
  console.log(jobs);
  const filteredStatus = (str) =>
    [...jobs].filter((job) => job.status === str).length;

  const DashboardWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    flex-direction: row-reverse;
    /* grid-template-rows: repeat(5, 100px); */
  `;
  const DashboardContainer = styled.div`
    flex: 1;
    /* background-color: lightpink; */
    /* padding-top: 2rem; */
  `;

  const Graph = styled.div`
    flex: 3;
    flex-direction: column;
    padding-top: 2rem;
    .chart--img {
      border: 1px solid blue;
    }
  `;

  const DashboardCard = styled.div`
    /* display: grid;
    grid-gap: 30px;
    grid-template-rows: repeat(auto-fit, 350px); */
    /* height: px; */
    justify-content: center;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    align-items: center;
    height: 100vh;
    h3,
    h4 {
      text-align: center;
    }
    .applied,
    .phone,
    .technical,
    .results {
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

      height: 20vh;
    }
    .filter--num {
      flex: 1;
      /* background-color: pink; */
      text-align: center;
      padding-left: 1rem;
      margin: 0 auto;
      color: red;
      font-size: 2.5rem;
    }
    h3 {
      flex: 3;
    }
  `;

  return (
    <>
      <DashboardWrapper>
        <DashboardContainer>
          <DashboardCard>
            <div className="applied">
              <BiIcons.BiArrowFromRight />
              <div className="filter--num">{jobs.length}</div>
              <h3>
                <AiIcons.AiFillFileAdd />
                Applied
              </h3>
            </div>
            <div className="phone">
              <BiIcons.BiArrowFromRight />
              <div className="filter--num">
                {filteredStatus("phone-interview")}
              </div>
              <h3>
                <BsIcons.BsFillPhoneFill />
                Interview
              </h3>
            </div>
            <div className="technical">
              <BiIcons.BiArrowFromRight />
              <div className="filter--num">
                {filteredStatus("technical interview")}
              </div>
              <h3>
                <BsIcons.BsFillFileCodeFill />
                Interview
              </h3>
            </div>
            <div>
              <div className="filter--num">
                <BiIcons.BiArrowFromRight />
                <AiIcons.AiOutlineSend />
                Results
              </div>
              <div className="filter--num">
                <FontAwesomeIcon icon={faCircleXmark} />
                {filteredStatus("declined")}
              </div>
              <div className="filter--num">
                <FontAwesomeIcon icon={faCircleCheck} />{" "}
                {filteredStatus("accepted")}
              </div>
            </div>
          </DashboardCard>
        </DashboardContainer>
        <Graph>
          <div className="chart--img">
            <ApplicationChart jobs={jobs} />
          </div>
        </Graph>
      </DashboardWrapper>
    </>
  );
};

export default Dashboard;
