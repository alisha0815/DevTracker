import { jobService } from "../../service/jobService";
// import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import COLORS from "../../styles/styled.constants";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

const Add = ({ job, setJob, jobs, setJobs }) => {
  let navigate = useNavigate();

  const inputHandler = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setJob({
      ...job,
      [e.target.name]: value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const { company, position, status, date_applied, date_interview } =
      e.target;

    const newJob = await jobService.createJob(
      company.value,
      position.value,
      status.value,
      date_applied.value,
      date_interview.value
    );
    setJobs([newJob, ...jobs]);

    setJob({
      company: "",
      position: "",
      status: "",
      date_applied: "",
      date_interview: "",
    });
    navigate("/list");
  };

  const Form = styled.div`
    box-shadow: 6px -1px 20px 0px rgba(0, 0, 0, 0.45);
    border-radius: 20px;
    padding-top: 2.4rem;
    text-align: center;
    margin: 0 auto;
    height: 90vh;
    position: relative;
    width: 100%;
    width: 70%;
    max-width: 50%;
    .form--box {
      z-index: 1000 !important;
    }
    .calendar {
      /* display: flex; */

      margin-left: 2rem;

      /* .applied {
        position: absolute;
        bottom: 210px;
        right: 140px;
        width: 260px;
        flex: 1;
      }
      .interview {
        position: absolute;
        bottom: 120px;
        right: 140px;
        width: 260px;
        flex: 1;
      } */
    }
  `;

  const FormWrapper = styled.div`
    /* background-color: green; */
    margin-top: 4rem;
    height: 70vh;
  `;

  const FormField = styled.div`
    margin: 0 auto;
    text-align: center;
    margin-right: 1em;
    /* select:focus,
    input:focus {
      outline: none;
    } */
    input,
    select {
      /* background-color: yellow; */
      width: 60%;
      /* height: 50px; */

      border-radius: 15px;
      padding: 1rem;
      margin-bottom: 1.1rem;
      border: none;
    }
    option {
      font-size: 1.2rem;
      color: ${COLORS.text};
    }
    .company,
    .position,
    .status,
    .applied,
    .interview {
      font-size: 1.1em;
      color: ${COLORS.text};
    }
  `;

  const AddButton = styled.div`
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

  return (
    <FormWrapper>
      <Form>
        <h1>Add a New Job</h1>
        <form onSubmit={submitHandler} className="form--box">
          {/* <label htmlFor="company">Company</label> */}
          <FormField>
            <div className="company">
              <input
                className="input--filed"
                type="text"
                name="company"
                value={job.company}
                onChange={inputHandler}
                placeholder="Type a company"
              />
            </div>
          </FormField>
          {/* <label htmlFor="position">Position</label> */}
          <FormField>
            <select
              className="position"
              name="position"
              value={job.position}
              onChange={inputHandler}
            >
              <option hidden>Select Job Title</option>
              <option value="frontend">frontend</option>
              <option value="backend">backend</option>
              <option value="fullstack">fullstack</option>
            </select>
          </FormField>
          {/* <label htmlFor="status">Status</label> */}
          <FormField>
            <select name="status" className="status">
              <option hidden>Select Job Status</option>
              <option value="interested">interested</option>
              <option value="applied">applied</option>
              <option value="phone-interview">phone-interview</option>
              <option value="technical interview">technical interview</option>
              <option value="declined">declined</option>
              <option value="accepted">accepted</option>
            </select>
          </FormField>
          <div className="calendar">
            <label htmlFor="date_applied">Applied</label>
            <FormField>
              <input
                className="applied"
                name="date_applied"
                type="date"
                // onfocus="(this.type = 'date')"
                value={job.date_applied}
                onChange={inputHandler}
              />
            </FormField>
          </div>
          <div className="calendar">
            <label htmlFor="date_interview">Interview</label>
            <FormField>
              <input
                className="interview"
                name="date_interview"
                type="datetime-local"
                value={job.date_interview}
                onChange={inputHandler}
              />
            </FormField>
          </div>
          <AddButton>
            <button className="add--btn">Add</button>
            <Link to={"/list"}>
              <button className="cancel--btn">Cancel</button>
            </Link>
          </AddButton>
        </form>
      </Form>
    </FormWrapper>
  );
};

export default Add;
