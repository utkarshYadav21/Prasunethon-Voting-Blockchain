import React from "react";
import AuthorizeVoters from "./components/AuthorizeVoters";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import Elections from './components/Elections';
import Result from './components/Result';

const App = () => {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/elections" element={<Elections />} />
          <Route path="/result" element={<Result />} />
          <Route path="/Authorize" element={<AuthorizeVoters />} />
      </Routes>
    </Router>
  );
};

export default App;
