import React from "react";
import AuthorizeVoters from "./components/AuthorizeVoters";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Authorize" element={<AuthorizeVoters />} />
      </Routes>
    </Router>
  );
};

export default App;
