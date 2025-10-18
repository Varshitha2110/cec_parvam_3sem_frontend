import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <Container>
        {/* ===== Title ===== */}
        <div className="contact-title">
          <h1>Contact Me</h1>
          <img src="/images/contact-bg.png" alt="Decorative Element" />
        </div>

        {/* ===== Main Section ===== */}
        <div className="contact-section">
          <Row className="align-items-start justify-content-center g-5">
            {/* ===== Left Side ===== */}
            <Col lg={5} md={10} className="contact-left text-md-start text-center">
              <h1>Let’s Talk</h1>
              <p>
                I’m always open to discussing new projects, creative ideas, or
                opportunities to collaborate. Let’s build something amazing
                together!
              </p>

              <div className="contact-details">
                <div className="contact-detail">
                  <i className="bi bi-envelope-fill"></i>
                  <span>yourmail@example.com</span>
                </div>

                <div className="contact-detail">
                  <i className="bi bi-telephone-fill"></i>
                  <span>+91 98765 43210</span>
                </div>

                <div className="contact-detail">
                  <i className="bi bi-geo-alt-fill"></i>
                  <span>Bangalore, India</span>
                </div>
              </div>
            </Col>

            {/* ===== Right Side ===== */}
            <Col lg={6} md={10} className="contact-right">
              <Form>
                <Form.Group className="mb-4" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Write your message here..."
                  />
                </Form.Group>

                <Button type="submit" className="contact-submit">
                  Send Message
                </Button>
              </Form>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
