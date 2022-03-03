import React, { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./components/Dashboard/dashboard";
import Home from "./components/Home/Home";
import List from "./components/List/List";
import Navbar from "./components/Navbar/Navbar";
import Add from "./components/NewJob/Add";
import { jobService } from "./service/jobService";

const App = () => {
  const [job, setJob] = useState({
    company: "",
    position: "",
    status: "",
  });
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    jobService
      .getAllJobs()
      .then((jobs) => setJobs(jobs))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Navbar />
      <>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/list" element={<List jobs={jobs} />} />
            <Route exact path="/add" element={<Add job={job} />} />
          </Routes>
        </Router>
      </>
    </>
  );
};

export default App;
