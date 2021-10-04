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
    <div className="container">
      <div className="text-center m-5">
        <h1 className="fw-bold text-info">Top Courses </h1>
        <h1 className="fw-bold">Our Top Online Courses</h1>
      </div>

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
