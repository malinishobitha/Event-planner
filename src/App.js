import './App.css';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbars from './components/Navabar';
import HomePage from './components/home';

function App() {
  return (
    <Router>
      <Navbars />
      <Routes>
      <Route path="/" element={<HomePage />} />       
        {/* <Route path="/features" element={<h1 className="text-center mt-5"> Features Page</h1>} />
        <Route path="/pricing" element={<h1 className="text-center mt-5"> Pricing Page</h1>} /> */}
      </Routes>
    </Router>
  );
}

export default App;


