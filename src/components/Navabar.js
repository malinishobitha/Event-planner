import React from "react";
import { Navbar, Nav} from "react-bootstrap";
import logo from './photos/logo.png';
import './css/Navbar.css';
function Navbars() { 
  return (
    <div className="container-Fluid">
    <Navbar bg="light" expand="lg">
     
        <Navbar.Brand href="/"><img src={logo}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">DESTINATION</Nav.Link>
            <Nav.Link href="#">WEDDING PLANS </Nav.Link>
            <Nav.Link href="#">CORPORANTE EVENT</Nav.Link>
            <Nav.Link href="#">VLOGS</Nav.Link>
            <Nav.Link href="#">WHO WE ARE</Nav.Link>
            <Nav.Link href="#">DROP US A LINE</Nav.Link>
            <Nav.Link href="#">LOGIN / REGISTER </Nav.Link>

            
          </Nav>
        </Navbar.Collapse>
        </Navbar>
        <nav class="navbars bg-body-tertiary">
  <div class="container-fluid">
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">BOOK AN APPOINTMENT </button>
    </form>
  </div>
</nav>
      </div>
   
  );
}

export default Navbars;
