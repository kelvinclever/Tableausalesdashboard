import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Viz from "./Viz";
import Nav from "./Nav";
import "./App.css";
import About from "./About";
import Summary from "./Summary";
import Portfolio from "./Portfolio";


const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          {/* Define the routes */}
          <Route path="/about" element={<About />} />
          <Route path="/viz" element={<Viz/>} />
          <Route path="/summary" element={<Summary />} />
          <Route path="/portfolio" element={<Portfolio />} />
          {/* Add a default route */}
          <Route path="/" element={<Viz />} />
        </Routes>
        <About/>
       
        
      </div>
      
    </Router>
  );
};

export default App;
