import "./Contact.css";
import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";

const Contact = () => {
  return (
    <div>
      <h1 className="contact-heading">Contact us here. </h1>

      <Form className="container">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="email" placeholder="Enter name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control type="password" placeholder="Email" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Subject</Form.Label>
          <Form.Control placeholder="Enter subject" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label> Enter Message </Form.Label>
          <h1>
            <textarea
              id="w3review"
              name="w3review"
              rows="4"
              cols="50"
            ></textarea>
          </h1>
        </Form.Group>

        <Row className="mb-3"></Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button id='contact-btn' variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Contact;
