import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Viz from "./Viz";
import Nav from "./Nav";
import "./App.css";
import Summary from "./Summary";
import Portfolio from "./Portfolio";


const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="content_">
        <Routes>
          {/* Define the routes */}
          <Route path="/viz" element={<Viz/>} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/portfolio" element={<Portfolio />} />

        </Routes></div>
      </div>
      
    </Router>
  );
};

export default App;
