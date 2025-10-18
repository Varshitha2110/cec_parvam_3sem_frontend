import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import footer_logo from "../../assets/footer_logo.svg";
import user_icon from "../../assets/user_icon.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        {/* === Top Section === */}
        <Row className="footer-top align-items-start">
          <Col lg={6} md={12} className="footer-top-left">
            <img src={footer_logo} alt="Footer Logo" className="footer-logo" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quasi
              debitis vitae obcaecati ab aliquam suscipit, nisi facere hic
              dolores odit, rerum dicta. Nesciunt mollitia, dignissimos corrupti
              deleniti maxime sequi.
            </p>
          </Col>

          <Col lg={6} md={12} className="footer-top-right">
            <Form className="d-flex footer-email-input">
              <div className="input-group">
                <span className="input-group-text bg-transparent border-0">
                  <img src={user_icon} alt="User Icon" />
                </span>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  className="footer-input"
                />
              </div>
              <Button className="footer-subscribe" variant="gradient">
                Subscribe
              </Button>
            </Form>
          </Col>
        </Row>

        <hr />

        {/* === Bottom Section === */}
        <Row className="footer-bottom align-items-center">
          <Col md={6} className="footer-bottom-left text-md-start text-center">
            <p>© 2025 John Doe. All rights reserved.</p>
          </Col>
          <Col
            md={6}
            className="footer-bottom-right text-md-end text-center d-flex justify-content-md-end justify-content-center gap-3"
          >
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
