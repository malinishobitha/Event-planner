import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css'
import Navbars from './components/Navbar';
import HomePage from './components/home';
import Footer from './components/Footer';
import Weddingplans from './components/weddingplans';
import Corporate from './components/Corporates';
import Vlogs from './components/vlogs';
import Whoweare from './components/who-we-are';
import Drop from './components/Drop';
import Login from './components/Login';
import Mice from './components/Mice';
import Launching from './components/Launching';
import Gathering from "./components/Gathering";
import Building from './components/Building';
import Catering from './components/Catering';
import Tour from './components/Tour';
import Sound from "./components/Sound";
import Lighting from './components/Lighting';
import Entertainment  from "./components/Entertainment";
import Photography from "./components/Photography";
import Stage from "./components/Stage";
import Multimedia from './components/Multimedia';
function App() {
  const [showLogin, setShowLogin] = useState(false); 

  return (
    <Router>
      <Navbars onLoginClick={() => setShowLogin(true)} /> 
      <Routes>
        <Route path="/" element={<HomePage />} />       
        <Route path="/weddingplans" element={<Weddingplans />} />
        <Route path="/corporates" element={<Corporate />} />
        <Route path="/vlogs" element={<Vlogs />} />
        <Route path="/who-we-are" element={<Whoweare />} />
        <Route path="/Drop" element={<Drop />} />
        <Route path='/Mice'element={<Mice />}/>
        <Route path='/Launching'element={<Launching />}/>
        <Route path="/Gathering"element={<Gathering/>}/>
        <Route path="/Building"element={<Building/>}/>
        <Route path="/Catering"element={<Catering/>}/>
        <Route path="/Tour"element={<Tour/>}/>
       <Route path="/Sound"element={<Sound/>}/>
       <Route path="/Entertainment"element={<Entertainment/>}/>
        <Route path="/Lighting"element={<Lighting/>}/>
        <Route path="/Photography"element={<Photography/>}/>
        <Route path="/Stage"element={<Stage/>}/>
        <Route path="/Multimedia"element={<Multimedia/>}/>
      </Routes>
      <Footer />

      
      {showLogin && (
        <div className="popup">
          <div className="popup-content">
            <button className="btn-close close-btn" onClick={() => setShowLogin(false)}></button>
            <Login />
          </div>
        </div>
      )}
    </Router>
  );
}

export default App;
