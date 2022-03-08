import moment from "moment";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { jobService } from "../../service/jobService";
import COLORS from "../../styles/styled.constants";
import {
  faPenToSquare,
  faTrashCan,
  faBuilding,
  faCode,
  faCalendarDays,
  faBell,
  faRepeat,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SubTitle } from "chart.js";

const List = ({ jobs, setJobs }) => {
  let navigate = useNavigate();
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const editHandler = (id) => {
    navigate(`/edit/${id}`);
  };

  const deleteHandler = (id) => {
    jobService
      .deleteJob(id)
      .then(() => setJobs(jobs.filter((job) => job.id !== id)));
    console.log("deleted");
  };

  const filterPositionHandler = (e) => {
    const position = e.target.value;
    setFilteredJobs(jobs.filter((job) => job.position === position));
  };

  const filterStatusHandler = (e) => {
    const status = e.target.value;
    setFilteredJobs(jobs.filter((job) => job.status === status));
  };

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
  return (
    <>
      <ListWrapper>
        <ListButton>
          <PositionButton>
            <TagButton
              className="tag--btn"
              value="all"
              onClick={() => setFilteredJobs(jobs)}
            >
              All
            </TagButton>
            <TagButton
              className="tag--btn"
              value="frontend
           "
              onClick={(e) => filterPositionHandler(e)}
            >
              Frontend
            </TagButton>
            <TagButton
              className="tag--btn"
              value="backend"
              onClick={(e) => filterPositionHandler(e)}
            >
              Backend
            </TagButton>
            <TagButton
              className="tag--btn"
              value="fullstack"
              onClick={(e) => filterPositionHandler(e)}
            >
              Fullstack
            </TagButton>
          </PositionButton>
          <StatusButton>
            <TagButton
              className="tag--btn"
              value="applied"
              onClick={(e) => filterStatusHandler(e)}
            >
              Applied
            </TagButton>
            <TagButton
              className="tag--btn"
              value="phone-interview"
              onClick={(e) => filterStatusHandler(e)}
            >
              Phone interview
            </TagButton>
            <TagButton
              className="tag--btn"
              value="technical interview"
              onClick={(e) => filterStatusHandler(e)}
            >
              Technical Interview
            </TagButton>
            <TagButton value="decliend" onClick={(e) => filterStatusHandler(e)}>
              Declined
            </TagButton>
            <TagButton
              className="tag--btn"
              value="accepted"
              onClick={(e) => filterStatusHandler(e)}
            >
              Accepted
            </TagButton>
          </StatusButton>
        </ListButton>

        <CardWrapper>
          <h1>Company ({filteredJobs.length})</h1>
          <CompanyContainer>
            {filteredJobs.map((job) => (
              <CompanyList key={job.id}>
                <CompanyWrapper>
                  <div className="card--section">
                    <li>
                      <div className="company--title">
                        {" "}
                        <FontAwesomeIcon
                          icon={faBuilding}
                          className="sub--icon"
                        />
                        <h2>{job.company}</h2>
                      </div>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCode} className="sub--icon" />
                      <CompanySubTitle>{job.position}</CompanySubTitle>
                    </li>
                    <li>
                      {" "}
                      <FontAwesomeIcon
                        icon={faClipboard}
                        className="sub--icon"
                      />
                      <CompanySubTitle> {job.status}</CompanySubTitle>
                    </li>

                    {job.date_applied && (
                      <li>
                        <FontAwesomeIcon
                          icon={faCalendarDays}
                          className="sub--icon"
                        />
                        <CompanySubTitle>Date applied</CompanySubTitle>
                        <span>{moment(job.date_applied).format("ll")}</span>
                      </li>
                    )}

                    {job.date_interview && (
                      <>
                        <h4>
                          <FontAwesomeIcon
                            icon={faBell}
                            className="sub--icon"
                          />
                          Reminder
                        </h4>
                        <li>{moment(job.date_interview).format("llll")}</li>
                      </>
                    )}
                  </div>
                  <li className="update">
                    <FontAwesomeIcon icon={faRepeat} />
                    Last update {moment(job.updatedAt).startOf("day").fromNow()}
                  </li>

                  <CompanyCardButton>
                    <Icon>
                      <button onClick={() => editHandler(job.id)}>
                        <FontAwesomeIcon icon={faPenToSquare} />
                      </button>
                    </Icon>
                    <Icon>
                      <button onClick={() => deleteHandler(job.id)}>
                        <FontAwesomeIcon icon={faTrashCan} />
                      </button>
                    </Icon>
                  </CompanyCardButton>
                </CompanyWrapper>
              </CompanyList>
            ))}
          </CompanyContainer>
        </CardWrapper>
      </ListWrapper>
    </>
  );
};

export default List;
