import React, { useRef } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-scroll";

function NavbarHome() {
  const [isScrolling, setIsScrolling] = useState(false);

  const ref = useRef(null);

  const handleScrollNav = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

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
            <Link
              to="about"
              className="mx-2 navbar-link"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              About
            </Link>
            <Link to="#link" className="mx-2 navbar-link">
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
