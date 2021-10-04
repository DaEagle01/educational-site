import "./Footer.css";
import React from "react";
import { Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container p-3">
        <Row>
          <Col xs={6} md={4}>
            <div>
              <img src="./logo.png" alt="" />
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
              libero a, minus alias doloremque dolore!
            </p>
            <h3>Subscribe</h3>
            <div className="footer-input-btn">
              <input type="text" />
              <button>Submit</button>
            </div>
          </Col>
          <Col xs={6} md={2}>
            <h3>Layout</h3>
            <p>Home</p>
            <p>Services</p>
            <p>About Us</p>
            <p>Contact</p>
            <p>Blog</p>
          </Col>
          <Col xs={6} md={3}>
            <h3>Useful Links</h3>
            <p>Photography</p>
            <p>Web Design</p>
            <p>Blockchain</p>
            <p>Cyber Security</p>
            <p>Machine Learning</p>
          </Col>
          <Col xs={6} md={3}>
            <h3>Contact Us</h3>
            <h5>Address </h5>
            <p>
              Chittagong Computer City R.F Zohura Tower, Shop No. -410, 1401 SK.
            </p>
            <h5>Phone</h5>
            <p>+8801624604917</p>
            <h5>Email</h5>
            <p>support@skillup.com</p>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
