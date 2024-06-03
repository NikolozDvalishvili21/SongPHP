import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../Navbar/style.css";
import logo from "../../icons/earbuds.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function CollapsibleExample() {
  const handleScroll = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Navbar collapseOnSelect expand="lg" className="component bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <Nav.Link href="#Home" as={Link} to="/">
            <img
              src={logo}
              style={{ width: "40px", height: "40px" }}
              className="logo"
            />
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Subscribe">Subscribe</Nav.Link>
            <Nav.Link href="#AboutUs" onClick={() => handleScroll("AboutUs")}>
              About Us
            </Nav.Link>
            <NavDropdown title="See More" id="collapsible-nav-dropdown">
              <Nav.Link href="#TopSongs" as={Link} to="/topsongs">
                <NavDropdown.Item href="#TopSongs">Top Songs</NavDropdown.Item>
              </Nav.Link>
              <Nav.Link href="#TopSingers" as={Link} to="/topsingers">
                <NavDropdown.Item href="#TopSingers">
                  Top Singers
                </NavDropdown.Item>
              </Nav.Link>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link
              href="#SignIn"
              className="custom-text"
              as={Link}
              to="/signin"
            >
              Sign In
            </Nav.Link>
            <Nav.Link
              eventKey={2}
              href="#SignUp"
              className="custom-text"
              as={Link}
              to="/signup"
            >
              Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
