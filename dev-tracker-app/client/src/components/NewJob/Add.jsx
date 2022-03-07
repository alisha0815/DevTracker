import { jobService } from "../../service/jobService";
// import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Add = ({ job, setJob, jobs, setJobs }) => {
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
  };
  return (
    <div>
      <h1>Add New Job</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="company">Company</label>
          <input
            type="text"
            name="company"
            value={job.company}
            onChange={inputHandler}
          />
          <label htmlFor="position">Position</label>
          <select name="position" value={job.position} onChange={inputHandler}>
            <option value="frontend">frontend</option>
            <option value="backend">backend</option>
            <option value="fullstack">fullstack</option>
          </select>
          <label htmlFor="status">Status</label>
          <select name="status">
            <option value="interested">interested</option>
            <option value="applied">applied</option>
            <option value="phone-interview">phone-interview</option>
            <option value="technical interview">technical interview</option>
            <option value="declined">declined</option>
            <option value="accepted">accepted</option>
          </select>
          <label htmlFor="date_applied">Date Applied</label>
          <input
            name="date_applied"
            type="datetime-local"
            value={job.date_applied}
            onChange={inputHandler}
          />
          <label htmlFor="date_interview">Date Interview</label>
          <input
            name="date_interview"
            type="datetime-local"
            value={job.date_interview}
            onChange={inputHandler}
          />
          <button>CREATE</button>
        </div>
      </form>
    </div>
  );
};

export default Add;
