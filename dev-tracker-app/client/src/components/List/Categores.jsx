import React, { useEffect, useState } from "react";

const Categories = ({ jobs, setJobs }) => {
  // set and set state being initialized
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const [position, setPosition] = useState("");
  const [frontend, setFrontend] = useState([]);
  const [backend, setBackend] = useState([]);
  const [fullstack, setFullstack] = useState([]);

  const handleFilterChange = (e) => {
    switch (e.target.value) {
      case "all":
        setPosition(e.target.value);
        console.log(position);
        break;
      case "frontend":
        setPosition(e.target.value);
        console.log(position);
        break;
      case "backend":
        setPosition(e.target.value);
        console.log(position);
        break;
      case "fullstack":
        setPosition(e.target.value);
        console.log(position);
        break;
      default:
        break;
    }
  };

  // filter by frontend
  const filterByFront = (filteredData) => {
    // if (!filteredData) {
    //   return filteredData;
    // }
    setFrontend(filteredData.filter((job) => job.position === "frontend"));
    console.log(frontend);
  };

  // filter by backend
  const filterByBackend = (filteredData) => {
    if (!filteredData) {
      return filteredData;
    }
    setBackend(filteredData.filter((job) => job.position === "backend"));
    console.log(backend);
  };

  // filter by fullstack
  const filterByFullstack = (filteredData) => {
    if (!filteredData) {
      return filteredData;
    }
    setFullstack(filteredData.filter((job) => job.position === "fullstack"));
    setFilteredJobs(filteredData.filter((job) => job.position === "fullstack"));
    console.log(fullstack);
  };

  useEffect(() => {
    let filteredData = jobs;
    filteredData = filterByFront(jobs);
    // filteredData = filterByBackend(jobs);
    // filteredData = filterByFullstack(jobs);
    setFilteredJobs(filteredData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredJobs]);

  return (
    <div>
      <h1>Category: Position</h1>
      <div>
        <div>
          {/* {JSON.stringify(filteredData)} */}
          <button value="all" onClick={(e) => handleFilterChange(e)}>
            All
          </button>
        </div>
        <div>
          <button value="frontend" onClick={(e) => handleFilterChange(e)}>
            Frontend
          </button>
          <button value="backend" onClick={(e) => handleFilterChange(e)}>
            Backend
          </button>
          <button value="fullstack" onClick={(e) => handleFilterChange(e)}>
            Fullstack
          </button>
        </div>
        <div>
          {/* {filteredJobs.map((job) => (
            <ul key={job.id}>
              <li>{job.company}</li>
              <li>{job.position}</li>
              <li>{job.status}</li>
            </ul>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Categories;
