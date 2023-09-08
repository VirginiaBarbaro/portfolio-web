import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Button,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";

function Skills() {
  return (
    <>
      <div id="skills" className="mt-5">
        <section>
          <h6 className="text-center text-muted">Explore my</h6>
          <h2 className="text-center">Hard skills</h2>
          <div className="container">
            <div className="row mt-5 p-2">
              <div className="col-4 front-skills">
                <Card className="shadow-lg">
                  <CardHeader>
                    <Heading size="md" className="text-center bi bi-code-slash">
                      {" "}
                      Front-end Development
                    </Heading>
                  </CardHeader>
                  <CardBody className="d-flex lh-lg">
                    <div className="col-6 d-flex justify-content-center">
                      <ul className="list-inline">
                        <li>
                          {" "}
                          <i className="bi bi-check-circle-fill me-2"></i>CSS
                        </li>
                        <li>
                          {" "}
                          <i className="bi bi-check-circle-fill me-2"></i>
                          JavaScript
                        </li>
                        <li>
                          {" "}
                          <i className="bi bi-check-circle-fill me-2"></i>
                          TypeScript
                        </li>
                        <li>
                          {" "}
                          <i className="bi bi-check-circle-fill me-2"></i>React
                        </li>
                      </ul>
                    </div>
                    <div className="col-6 d-flex justify-content-center">
                      <ul className="list-inline">
                        <li>
                          {" "}
                          <i className="bi bi-check-circle-fill me-2"></i>Redux
                        </li>
                        <li>
                          {" "}
                          <i className="bi bi-check-circle-fill me-2"></i>
                          Tailwind
                        </li>
                        <li>
                          {" "}
                          <i className="bi bi-check-circle-fill me-2"></i>
                          Bootstrap
                        </li>
                        <li>
                          {" "}
                          <i className="bi bi-check-circle-fill me-2"></i>Chakra
                          UI
                        </li>
                        <li>
                          {" "}
                          <i className="bi bi-check-circle-fill me-2"></i>
                          Material UI
                        </li>
                      </ul>
                    </div>
                  </CardBody>
                </Card>
              </div>
              <div className="col-4 back-skills">
                <Card className="shadow-lg">
                  <CardHeader>
                    <Heading size="md" className="text-center bi bi-braces">
                      {" "}
                      Back-end Development
                    </Heading>
                  </CardHeader>
                  <CardBody className="d-flex lh-lg">
                    <div className="col-6 d-flex justify-content-center">
                      <ul className="list-inline">
                        <li>
                          <i className="bi bi-check-circle-fill me-2"></i>NodeJS
                        </li>
                        <li>
                          {" "}
                          <i className="bi bi-check-circle-fill me-2"></i>
                          ExpressJS
                        </li>
                        <li>
                          {" "}
                          <i className="bi bi-check-circle-fill me-2"></i>
                          MySQL
                        </li>
                        <li>
                          {" "}
                          <i className="bi bi-check-circle-fill me-2"></i>
                          Sequelize
                        </li>
                      </ul>
                    </div>
                    <div className="col-6 d-flex justify-content-center">
                      <ul className="list-inline">
                        <li>
                          {" "}
                          <i className="bi bi-check-circle-fill me-2"></i>
                          MongoDB
                        </li>
                        <li>
                          {" "}
                          <i className="bi bi-check-circle-fill me-2"></i>
                          Mongoose
                        </li>
                        <li>
                          {" "}
                          <i className="bi bi-check-circle-fill me-2"></i>
                          Restful API
                        </li>
                        <li>
                          {" "}
                          <i className="bi bi-check-circle-fill me-2"></i>
                          PassportJS
                        </li>
                      </ul>
                    </div>
                  </CardBody>
                </Card>
              </div>
              <div className="col-4 other-skills">
                <Card className="shadow-lg">
                  <CardHeader>
                    <Heading size="md" className="text-center bi bi-wrench">
                      {" "}
                      Other
                    </Heading>
                  </CardHeader>
                  <CardBody className="lh-lg d-flex justify-content-center">
                    <ul className="list-inline">
                      <li>
                        <i className="bi bi-check-circle-fill me-2"></i>Git
                      </li>
                      <li>
                        {" "}
                        <i className="bi bi-check-circle-fill me-2"></i>
                        Github
                      </li>
                      <li>
                        {" "}
                        <i className="bi bi-check-circle-fill me-2"></i>
                        Webpack
                      </li>
                      <li>
                        {" "}
                        <i className="bi bi-check-circle-fill me-2"></i>
                        Npm
                      </li>
                    </ul>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Skills;
