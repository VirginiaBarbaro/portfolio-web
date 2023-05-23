import React from "react";
import NavbarHome from "../components/NavbarHome";
import { Button } from "@chakra-ui/react";
import About from "./About";

function Home() {
  return (
    <>
      <NavbarHome />
      <div className="home-container">
        <div className="row main-home">
          <div className="col-6 col-sm-6 col-md-6 col-main-home">
            <div className="p-3 d-flex justify-content-center">
              <img
                src="/foto_linkedin.jpg"
                className="rounded rounded-circle"
                style={{ width: "230px", height: "230px" }}
              />
            </div>
          </div>
          <div className="col-sm-6 col-6 col-md-6 text-center col-main-home d-flex flex-column justify-content-center">
            <h6>Hello, I'm</h6>
            <h2>Virginia</h2>
            <h3>Full Stack Developer</h3>
            <div className="mt-4 btn-action-home">
              <Button variant="outline" className="btn-home mx-2 my-2">
                Download CV
              </Button>
              <Button variant="outline" className="btn-home mx-2">
                Contact info
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div class="custom-shape-divider-top-1684797451">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <About />
    </>
  );
}

export default Home;
