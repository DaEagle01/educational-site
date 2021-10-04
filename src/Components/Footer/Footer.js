import "./Footer.css";
import React from "react";
import { Col, Form, FormControl, InputGroup, Row } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";

const Footer = () => {
  return (
    <div>
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
          <div>
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
        <Col xs={6} md={2}>
                  <h2>Useful Links</h2>
                  <p>Photography</p>
                  <p>Web Design</p>
                  <p>Blockchain</p>
                  <p>Cyber Security</p>
                  <p>Machine Learning</p>
        </Col>
        <Col xs={6} md={4}>
          <h2>Contact Us</h2>
          <h3>Address </h3>
          <p>ifjowie ohfqon wifr owfo owheef</p>
          <h3>Phone</h3>
          <p>+8801624604917</p>
          <h3>Email</h3>
          <p>support@skillup.com</p>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
