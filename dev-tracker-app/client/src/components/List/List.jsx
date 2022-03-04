import { useNavigate } from "react-router-dom";
import EditForm from "../EditForm/EditForm";

const List = ({ jobs, setJob, setJobs, setIsEditing }) => {
  let navigate = useNavigate();

  const editHandler = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div>
      <h1>Job List</h1>
      <ul>
        <h1>Company</h1>
        {jobs.map((job) => (
          <ul key={job.id}>
            <div>
              <li>
                <h1>{job.company}</h1>
              </li>
              <li>{job.position}</li>
              <li>{job.status}</li>
              <button onClick={() => editHandler(job.id)}>EDIT</button>
              {/* <EditForm id={job.id} job={job} setJob={setJob} /> */}
            </div>
          </ul>
        ))}
      </ul>
    </div>
  );
};

export default List;
