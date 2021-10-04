import "./Services.css";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import AllServiceData from "../AllServiceData/AllServiceData";
import { Row } from "react-bootstrap";

const Services = () => {
  const [technologies, setTechnologies] = useState([]);
  useEffect(() => {
    fetch("./allservice.json")
      .then((res) => res.json())
      .then((data) => setTechnologies(data));
  }, []);

  return (
    <div>
      <h1>This is from services. </h1>
      <Row xs={1} md={3} className="g-4">
        {technologies.map((technology) => (
          <AllServiceData
            technology={technology}
            key={technology.price}
          ></AllServiceData>
        ))}
      </Row>
    </div>
  );
};

export default Services;
