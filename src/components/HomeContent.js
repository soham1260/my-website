import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../assets/MyImg1.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillFacebook,
  AiFillMail
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export default function HomeContent() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{fontSize:"2.6em",textAlign:"left"}}>
              LET ME&nbsp;<span className="mobile-break" /><span className="purple">INTRODUCE</span>&nbsp;<span className="mobile-break" />MYSELF
            </h1>
            <p className="home-about-body">
                The joy of creating drives me — maybe that's why I love programming.
                <br />
                <br />
                I'm calm and patient, which probably explains my fluency in
                <i>
                    <b className="purple"> C++ and JavaScript</b>.
                </i>
                <br />
                <br />
                My interests lie in building&nbsp;
                <i>
                    <b className="purple">web development and innovative technologies</b>.
                </i>
                <br />
                <br />
                I'm passionate about developing real-world software systems, enjoy solving
                complex problems, and constantly seek to grow my skills to keep pace with
                evolving technologies.
                <br />
                <br />
                And yes, you’ll sometimes find me gaming 🙂 — feel free to add me to your party!
            </p>

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img width={380} src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="mailto:1260soham@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/soham1260"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/soham.khatavkar.5"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soham-khatavkar-899abb22b"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/soham_1260"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
