import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import { useEffect } from "react";

function NavbarHome() {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset === 0) {
      setIsScrolling(false);
    } else {
      setIsScrolling(true);
    }
  };

  return (
    <Navbar
      expand="lg"
      className={`navbar-container ${
        isScrolling ? "navbar-dynamic" : "navbar-static"
      }`}
    >
      <Container>
        <Navbar.Brand href="#home">Virginia Barbaro</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#link" className="mx-2 navbar-link">
              About
            </Nav.Link>
            <Nav.Link href="#link" className="mx-2 navbar-link">
              Experience
            </Nav.Link>
            <Nav.Link href="#link" className="mx-2 navbar-link">
              Projects
            </Nav.Link>
            <Nav.Link href="#link" className="mx-2 navbar-link">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHome;
