import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-scroll";

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
      id="navbar"
    >
      <Container>
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="navbar-link"
        >
          <Navbar.Brand>Virginia Barbaro</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link
              to="about"
              className="mx-2 navbar-link"
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
            >
              About
            </Link>
            <Link
              to="skills"
              className="mx-2 navbar-link"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Skills
            </Link>
            <Link to="#link" className="mx-2 navbar-link">
              Projects
            </Link>
            <Link to="#link" className="mx-2 navbar-link">
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHome;
