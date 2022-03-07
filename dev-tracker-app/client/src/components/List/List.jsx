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
  faSquarePen,
  faBell,
  faRepeat,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    margin-top: 4em;
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
    display: inline-block;
    text-align: center;
    margin: 0 auto;
  `;

  const CompanyList = styled.div`
    border: 1px solid blue;
    width: 100%;
    display: flex;
    justify-content: center;
    ul {
      padding: 0;
    }
  `;

  const CompanyWrapper = styled.div`
    border: 1px solid red;
    width: 100%;
  `;

  const CompanyContainer = styled.div`
    align-items: start;
    display: grid;
    grid-gap: 36px;
    grid-template-columns: repeat(auto-fit, 500px);
    height: 700px;
    justify-content: center;
    padding: 2rem;
  `;

  const CardWrapper = styled.div`
    padding-top: 3rem;
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
                  <li>
                    <h1>
                      {" "}
                      <FontAwesomeIcon icon={faBuilding} />
                      {job.company}
                    </h1>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCode} />
                    {job.position}
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCalendarDays} />
                    {job.status}
                  </li>
                  {job.date_applied && (
                    <li>
                      Date applied: {moment(job.date_applied).format("llll")}
                    </li>
                  )}

                  {job.date_interview && (
                    <>
                      <h4>
                        <FontAwesomeIcon icon={faBell} />
                        Reminder
                      </h4>
                      <li>{moment(job.date_interview).format("llll")}</li>
                    </>
                  )}
                  <li>
                    <FontAwesomeIcon icon={faRepeat} />
                    Last update {moment(job.updatedAt).startOf("day").fromNow()}
                  </li>

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
