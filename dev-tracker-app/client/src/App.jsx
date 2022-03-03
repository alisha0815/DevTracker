import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./components/Dashboard/dashboard";
import Home from "./components/Home/Home";
import List from "./components/List/List";
import Navbar from "./components/Navbar/Navbar";
import Add from "./components/NewJob/Add";

const App = () => {
  return (
    <>
      <Navbar />
      <>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
            <Route exact path="/list" element={<List />} />
            <Route exact path="/add" element={<Add />} />
          </Routes>
        </Router>
      </>
    </>
  );
};

export default App;
