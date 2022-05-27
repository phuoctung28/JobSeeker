import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./index.module.css"
export const Header = () => {
  return (
      <Navbar expand="lg" className="header">
        <Container>
          <Navbar.Brand href="#home">
            {" "}
            <img
              src="/logo-fpt-login.png"
              width="339px"
              height="75px"
              className="d-inline-block align-middle"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-center">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Jobs</Nav.Link>
              <Nav.Link href="#link">Company</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand >
            <img src="/icons8-circled-user-male-skin-type-4-48.png" alt="" />
          </Navbar.Brand>
        </Container>
      </Navbar>
  );
};
