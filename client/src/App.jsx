import React, { useEffect, useState } from 'react';
// import { useSelector } from "react-redux";
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Dashboard from './components/Dashboard/dashboard';
import EditForm from './components/EditForm/EditForm';
import Home from './components/Home/Home';
import List from './components/List/List';
import Navbar from './components/Navbar/Navbar';
import Add from './components/NewJob/Add';
import Reminder from './components/Reminder/Reminder';
import jobService from './service/jobService';
import GlobalStyle from './styles/styled.global';
import Login from './components/Login/Login';

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [update, triggerUpdate] = useState();
  // KOSTAS: This state will be used as a mechanism to trigger the useEffect via the dependency `update` that we pass to it.

  useEffect(() => {
    console.log('useEffectAPP');
    jobService
      .getAllJobs()
      .then(jobs => setJobs(jobs))
      .catch(err => console.error(err));
  }, [update]);
  // KOSTAS Every time the `update` gets updated with a new value, the useEffect will be called which means we'll get a new fetch and the `jobs` state will be updated.

  return (
    <>
      <div>
        <GlobalStyle />
        <>
          <Router>
            <Navbar />
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route
                exact
                path='/dashboard'
                element={<Dashboard jobs={jobs} />}
              />
              <Route exact path='/login' element={<Login />} />
              <Route
                exact
                path='/list'
                element={<List jobs={jobs} setJobs={setJobs} />}
              />
              <Route
                exact
                path='/add'
                element={
                  <Add
                    setJobs={setJobs}
                    jobs={jobs}
                    isEditing={isEditing}
                    setIsEditing={setIsEditing}
                  />
                }
              />
              <Route
                exact
                path='/edit/:id'
                element={
                  <EditForm
                    // KOSTAS: We pass the triggerUpdate function as a prop, so that the EditForm Component can call the function and update the `update` state in this Component which will subsequently trigger the useEffect
                    triggerUpdate={triggerUpdate}
                    jobs={jobs}
                    setJobs={setJobs}
                  />
                }
              />
              <Route
                exact
                path='/reminder'
                element={<Reminder jobs={jobs} />}
              />
            </Routes>
          </Router>
        </>
      </div>
    </>
  );
};

export default App;
