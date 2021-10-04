import "./Header.css";
import React from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import { NavLink } from "react-router-dom";

const Header = () => {
  const linkStyle = {
    margin: "1.5rem",
    textDecoration: "none",
    color: "black",
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid className='container'>
          <NavLink to="/home">
            <div className="header-icon">
              <img src="./logo.png" alt="" />{" "}
            </div>
          </NavLink>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <div className="nav-option">
                <NavLink to="/home" style={linkStyle}>
                  Home
                </NavLink>
                <NavLink to="/service" style={linkStyle}>
                  Services
                </NavLink>

                <NavLink to="/about" style={linkStyle}>
                  About Us
                </NavLink>
                <NavLink to="/contact" style={linkStyle}>
                  Contact
                </NavLink>
              </div>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button id='search-btn' variant="light">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
