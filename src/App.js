import './App.css';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbars from './components/Navbar';
import HomePage from './components/home';
import Footer from './components/Footer';
import Weddingplans from './components/weddingplans';
import Corporate from './components/Corporates';
import Vlogs from './components/vlogs';
import Whoweare from './components/who-we-are';
function App() {
  return (
    <Router>
      <Navbars />
      <Routes>
      <Route path="/" element={<HomePage />} />       
       <Route path="/weddingplans" element={<Weddingplans/>} />
       <Route path="/corporates" element={<Corporate />} />
       <Route path="/vlogs" element={<Vlogs />} />
       <Route path="/who-we-are" element={<Whoweare/>} />

       </Routes>
      <Footer/>
    </Router>
  );
}

export default App;


