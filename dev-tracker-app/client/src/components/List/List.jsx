import { useNavigate } from "react-router-dom";

const List = ({ jobs, setJobs, setIsEditing }) => {
  let navigate = useNavigate();

  const editHandler = (id) => {
    navigate("/add");
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
            </div>
          </ul>
        ))}
      </ul>
    </div>
  );
};

export default List;
