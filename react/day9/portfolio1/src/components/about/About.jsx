import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import "./About.css"; // Optional for extra styling

const About = () => {
  return (
    <section className="about-section py-5">
      <Container>
        {/* ===== Title Section ===== */}
        <div className="position-relative text-center mb-5">
          <h1 className="fw-bold display-3 d-inline-block px-3">About Me</h1>
          <img
            src="/images/about-decor.png"
            alt="decor"
            className="position-absolute top-50 end-0 translate-middle-y d-none d-md-block"
            style={{ width: "150px", zIndex: "-1" }}
          />
        </div>

        {/* ===== Main Content ===== */}
        <Row className="align-items-center gy-5">
          {/* Left Side Image */}
          <Col md={5} className="text-center">
            <img
              src="/images/about-photo.jpg"
              alt="About"
              className="img-fluid rounded-3 shadow"
            />
          </Col>

          {/* Right Side Content */}
          <Col md={7}>
            {/* Paragraphs */}
            <div className="mb-5">
              <p className="fs-5 fw-medium">
                I'm a passionate web developer with expertise in React,
                JavaScript, and UI/UX design.
              </p>
              <p className="fs-5 fw-medium">
                I focus on building responsive, user-friendly, and modern web
                experiences.
              </p>
            </div>

            {/* Skills Section */}
            <div className="about-skills">
              <div className="d-flex align-items-center gap-4 mb-3">
                <p className="mb-0 fw-medium fs-5" style={{ minWidth: "150px" }}>
                  HTML
                </p>
                <ProgressBar
                  now={90}
                  className="flex-grow-1"
                  style={{
                    height: "10px",
                    background: "#eee",
                  }}
                  variant="custom"
                />
              </div>

              <div className="d-flex align-items-center gap-4 mb-3">
                <p className="mb-0 fw-medium fs-5" style={{ minWidth: "150px" }}>
                  CSS
                </p>
                <ProgressBar now={85} className="flex-grow-1" variant="custom" />
              </div>

              <div className="d-flex align-items-center gap-4">
                <p className="mb-0 fw-medium fs-5" style={{ minWidth: "150px" }}>
                  JavaScript
                </p>
                <ProgressBar now={75} className="flex-grow-1" variant="custom" />
              </div>
            </div>
          </Col>
        </Row>

        {/* ===== Achievements ===== */}
        <div className="about-achievements d-flex flex-column flex-md-row justify-content-around align-items-center gap-4 mt-5">
          <div className="text-center about-achievement">
            <h1 className="fw-bold display-5 text-gradient">5+</h1>
            <p className="fw-medium fs-5">Years Experience</p>
          </div>

          <hr className="d-none d-md-block" style={{ height: "130px" }} />

          <div className="text-center about-achievement">
            <h1 className="fw-bold display-5 text-gradient">50+</h1>
            <p className="fw-medium fs-5">Projects Completed</p>
          </div>

          <hr className="d-none d-md-block" style={{ height: "130px" }} />

          <div className="text-center about-achievement">
            <h1 className="fw-bold display-5 text-gradient">20+</h1>
            <p className="fw-medium fs-5">Happy Clients</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
