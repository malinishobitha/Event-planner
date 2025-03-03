import React from "react";
import { Navbar, Nav} from "react-bootstrap";
import logo from './photos/logo.png';
import './css/Navbar.css';
function Navbars() { 
  return (
    <div className="Container-Fluid">
    <Navbar bg="light" expand="lg">
     
        <Navbar.Brand href="/"><img src={logo}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">DESTINATION</Nav.Link>
            <Nav.Link href="/weddingplans">WEDDING PLANS </Nav.Link>
            <Nav.Link href="/Corporates">CORPORANTE EVENT</Nav.Link>
            <Nav.Link href="/vlogs">VLOGS</Nav.Link>
            <Nav.Link href="who-we-are">WHO WE ARE</Nav.Link>
            <Nav.Link href="#">DROP US A LINE</Nav.Link>
            <Nav.Link href="#">LOGIN / REGISTER </Nav.Link>

            
          </Nav>
        </Navbar.Collapse>
        </Navbar>
       
      </div>
   
  );
}

export default Navbars;
