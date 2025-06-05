import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import laptopImg from "../assets/laptopImg.png";
import {
  DiReact,
  DiNodejs,
} from "react-icons/di";
import {
  SiPostman,
  SiCplusplus,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiCloudinary,
  SiDocker,
  SiMongodb,
  SiAnkermake,
  SiRender,
  SiGit,
  SiCmake,
  SiUbuntu
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import { VscAzure } from "react-icons/vsc";
import { GrMysql,GrWindows } from "react-icons/gr";
import { FaGamepad } from "react-icons/fa";
import { MdMovieCreation } from "react-icons/md";
import { FaHiking } from "react-icons/fa";

export default function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", display: "flex", justifyContent: "center" }}>
              About <strong className="purple">&nbsp;Myself</strong>
            </h1>
            <Card className="quote-card-view">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p style={{ textAlign: "justify" }}>
                    Hey, I'm <span className="purple">Soham Khatavkar </span>
                    from <span className="purple"> Sangli, Maharashtra.</span>
                    <br />
                    I have completed my Bachelor of Technology (B.Tech) in Computer Science and Engineering from 
                    Visvesvaraya National Institute of Technology (NIT), Nagpur.
                    <br />
                    I am currently pursuing a Master of Technology (M.Tech) in Computer Science from the 
                    Indian Institute of Technology (IIT) Bombay.
                    <br />
                    <br />
                    Apart from coding, learning and exploring, I also enjoy:
                  </p>
                  <ul>
                    <li className="about-activity">
                      <FaGamepad />&nbsp; Playing Games
                    </li>
                    <li className="about-activity">
                      <MdMovieCreation />&nbsp; Watching Movies and Series
                    </li>
                    <li className="about-activity">
                      <FaHiking />&nbsp; Travelling
                    </li>
                  </ul>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "40px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading" style={{display:"flex",justifyContent:"center"}}>
          Professional <strong className="purple">&nbsp;Skillset </strong>
        </h1>

        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons" onClick={() => window.open("https://cplusplus.com", "_blank")}>
            <SiCplusplus />
          </Col>
          <Col xs={4} md={2} className="tech-icons" onClick={() => window.open("https://developer.mozilla.org/en-US/docs/Web/JavaScript/", "_blank")}>
            <SiJavascript />
          </Col>
          <Col xs={4} md={2} className="tech-icons" onClick={() => window.open("https://developer.mozilla.org/en-US/docs/Web/HTML/", "_blank")}>
            <SiHtml5 />
          </Col>
          <Col xs={4} md={2} className="tech-icons" onClick={() => window.open("https://developer.mozilla.org/en-US/docs/Web/CSS/", "_blank")}>
            <SiCss3 />
          </Col>
          <Col xs={4} md={2} className="tech-icons" onClick={() => window.open("https://nodejs.org/en/", "_blank")}>
            <DiNodejs />
          </Col>
          <Col xs={4} md={2} className="tech-icons" onClick={() => window.open("https://react.dev/", "_blank")}>
            <DiReact />
          </Col>
          <Col xs={4} md={2} className="tech-icons" onClick={() => window.open("https://expressjs.com/", "_blank")}>
            <SiExpress />
          </Col>
          <Col xs={4} md={2} className="tech-icons" onClick={() => window.open("https://www.mongodb.com/", "_blank")}>
            <SiMongodb />
          </Col>
          <Col xs={4} md={2} className="tech-icons" onClick={() => window.open("https://cloudinary.com/", "_blank")}>
            <SiCloudinary />
          </Col>
          <Col xs={4} md={2} className="tech-icons" onClick={() => window.open("https://www.docker.com/", "_blank")}>
            <SiDocker />
          </Col>
          <Col xs={4} md={2} className="tech-icons" onClick={() => window.open("https://azure.microsoft.com/en-us/", "_blank")}>
            <VscAzure />
          </Col>
          <Col xs={4} md={2} className="tech-icons" onClick={() => window.open("https://www.gnu.org/software/make/", "_blank")}>
            <SiAnkermake />
          </Col>
          <Col xs={4} md={2} className="tech-icons" onClick={() => window.open("https://git-scm.com/", "_blank")}>
            <SiGit />
          </Col>
          <Col xs={4} md={2} className="tech-icons" onClick={() => window.open("https://www.mysql.com/", "_blank")}>
            <GrMysql />
          </Col>
          <Col xs={4} md={2} className="tech-icons" onClick={() => window.open("https://cmake.org/", "_blank")}>
            <SiCmake />
          </Col>
        </Row>

        <h1 className="project-heading" style={{display:"flex",justifyContent:"center"}}>
          <strong className="purple">Tools</strong>&nbsp;I use
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={4} md={2} className="tech-icons" onClick={() => window.open("https://www.microsoft.com/en-in/windows/", "_blank")}>
            <GrWindows />
          </Col>
          <Col xs={4} md={2} className="tech-icons" onClick={() => window.open("https://ubuntu.com/", "_blank")}>
            <SiUbuntu />
          </Col>
          <Col xs={4} md={2} className="tech-icons" onClick={() => window.open("https://code.visualstudio.com/", "_blank")}>
            <BiLogoVisualStudio />
          </Col>
          <Col xs={4} md={2} className="tech-icons" onClick={() => window.open("https://www.postman.com/", "_blank")}>
            <SiPostman />
          </Col>
          <Col xs={4} md={2} className="tech-icons" onClick={() => window.open("https://render.com/", "_blank")}>
            <SiRender />
          </Col>
        </Row>
        </Container>
    </Container>
  )
}
