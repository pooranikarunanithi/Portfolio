import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import Screenshot from "../../Assets/Projects/Screenshot.jpg";

import restra from "../../Assets/Projects/restra.jpg";
import getfliximage from "../../Assets/Projects/getfliximage.jpg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={getfliximage}
              isBlog={false}
              title="GETFLIX"
              description="A session system: registration, connection / disconnection
              - Usage of PHP and MySQL
              - Team work with colleagues and usage of Git Branch, Fork, Merge"
              link="https://github.com/pooranikarunanithi"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Screenshot}
              isBlog={false}
              title="NPBOOKING"
              description="Built full stack marketplace app using MERN (MongoDB Express React Node) Stack
              - Integration of Stripe third party payment APIs to automate entire payment workflow to build a multi user marketplace app
              - Provisions to collect money from customers and pay to sellers as a platform owner
              - Advance CRUD and Search
              - JWT based Authentication System"
              link="https://github.com/pooranikarunanithi"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={restra}
              isBlog={false}
              title="Restaurant Framework"
              description="The website is responsive, at least for small and medium screens. It has five accessible pages: welcome, menu, pictures, restaurants and contact.
               It is created by Using HTML,CSS,SASS,BOOTSTRAP."
              
              link="https://github.com/pooranikarunanithi"
            />
          </Col>

         

         

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
