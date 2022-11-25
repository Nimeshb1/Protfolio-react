import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

export const NewNavbar = () => {
  return (
    <Navbar bg="" expand="md">
      <Container fluid className="name text-primary gap-5">
        <Navbar.Brand href="/" className="text-white">
          NIMESH BISTA
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="text-white bg-white "
        />
        <Navbar.Collapse id="basic-navbar-nav" className="text-white gap-5">
          <Nav className="me-auto  af-sm text-white gap-5 text-decoration-none">
            <Link to="/" className="text-white lninktext">
              Home
            </Link>
            <Link to="/about" className="text-white">
              Project
            </Link>
            <Link to="/about" className="text-white">
              Skills
            </Link>
            <Link to="/about" className="text-white">
              About Me
            </Link>
            <Link to="/about" className="text-white">
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
