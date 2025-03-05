import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom"; 
import logo from "./photos/logo.png";
import "./css/Navbar.css";

function Navbars({ onLoginClick }) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">DESTINATION</Nav.Link>
            <Nav.Link as={Link} to="/weddingplans">WEDDING PLANS</Nav.Link>
            <Nav.Link as={Link} to="/corporates">CORPORATE EVENT</Nav.Link>
            <Nav.Link as={Link} to="/vlogs">VLOGS</Nav.Link>
            <Nav.Link as={Link} to="/who-we-are">WHO WE ARE</Nav.Link>
            <Nav.Link as={Link} to="/drop">DROP US A LINE</Nav.Link>

            {/* ✅ Popup Login/Register Button (No href, Just onClick) */}
            <Nav.Link onClick={onLoginClick} style={{ cursor: "pointer", color: "blue", fontWeight: "bold" }}>
              LOGIN / REGISTER
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;
