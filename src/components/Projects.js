import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import side from '../assets/side.png'
import gt from '../assets/gt.png'
import setris from '../assets/setris.png'

export default function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading" style={{display:"flex", justifyContent:"center"}}>
          My Recent <strong className="purple">&nbsp;Works </strong>
        </h1>
        <p style={{ color: "white",display:"flex", justifyContent:"center" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={side}
              isBlog={false}
              title="sIDE+"
              description="An online code execution platform supporting C, C++, Java, Python, and JavaScript. Offers features like auto-save, auto-complete, and code sharing. Code runs securely in Docker-isolated environments with execution limits, hosted on a remote Azure VM to ensure reliability, scalability, and protection against malicious code."
              ghLink1="https://github.com/soham1260/sIDE-Frontend"
              ghLink2="https://github.com/soham1260/sIDE-backend"
              demoLink="https://side-28r4.onrender.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gt}
              isBlog={false}
              title="Globe Trotters"
              description="Globe Trotters is a multimedia travel blog built with the MERN (MongoDB, Express, React, Node.js) stack. It allows users to share rich travel experiences through image and video uploads via Cloudinary, while blog text is stored in markup to retain formatting. A dynamic platform for documenting and exploring journeys around the world."
              ghLink1="https://github.com/soham1260/Globe-Trotters-Frontend"
              ghLink2="https://github.com/soham1260/Globe-Trotters-Backend"
              demoLink="https://globe-trotters.onrender.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={setris}
              isBlog={false}
              title="Setris"
              description="Developed a modular, custom Tetris game in C++ with fully customizable gameplay—speed, block shapes, and drop behavior. Designed using core OOP principles for scalability. Deployed as a browser-based demo by integrating C++ logic with a ReactJS frontend via WebAssembly, enabling seamless in-browser execution and interactive gameplay."
              ghLink1="https://github.com/soham1260/setris"
              demoLink="https://setris.onrender.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
