import "./Home.css";
import React from "react";
import { Carousel, Row } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import SingleTechData from "../SingTechData/SingleTechData";

const Home = () => {
  const [techData, setTechData] = useState([]);
  useEffect(() => {
    fetch("./fakedata.JSON")
      .then((res) => res.json())
      .then((data) => setTechData(data));
  }, []);

  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src="./img2.jpg" alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="./img4.jpg" alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="./img5.jpg" alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div>
        <h2>
          Explore our top online <span>courses</span>{" "}
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          veritatis recusandae harum provident ducimus, repellendus, ea maxime
          laborum illo eum omnis labore sunt molestiae iusto quos eius quae
          mollitia itaque.
        </p>
      </div>
      <div>
        <Row xs={1} md={2} className="g-4">
          {techData.map((tdata) => (
            <SingleTechData tdata={tdata} key={tdata.price}></SingleTechData>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Home;
