import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import hero_img from "../../assets/hero_img.svg";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero text-center">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12}>
            <img src={hero_img} alt="Hero" className="img-fluid" />
          </Col>

          <Col xs={12}>
            <h1>
              Hi, I’m <span>John Doe</span> 👋
              <br />
              A Passionate Frontend Developer
            </h1>
          </Col>

          <Col xs={12}>
            <p>
              I specialize in creating modern, responsive web experiences using React and Bootstrap.
              Let’s build something amazing together!
            </p>
          </Col>

          <Col xs={12}>
            <div className="hero-action d-flex justify-content-center flex-wrap">
              <Button className="hero-connect">Connect With Me</Button>
              <Button variant="outline-light" className="hero-resume">
                My Resume
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
