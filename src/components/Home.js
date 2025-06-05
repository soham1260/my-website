import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import homeLogo from "../assets/home-main.png"
import Typewriter from "typewriter-effect";
import HomeContent from './HomeContent';

export default function Home() {
  return (
    <>
      <Container fluid className="home-section" id='home'>
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>

                <h1 className="heading-name">
                  I'M
                  <strong className="main-name"> SOHAM KHATAVKAR</strong>
                </h1>

                <div style={{ padding: 50, textAlign: "left" }}>
                  <Typewriter
                      onInit={(typewriter) => {typewriter.typeString("Aspiring Software Developer").start();}}
                  />
                </div>
              </Col>

              <Col md={5} style={{ paddingBottom: 20 }}>
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "450px" }}
                />
              </Col>
            </Row>
          </Container>
      </Container>
      <HomeContent/>
    </>
  )
}
