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
    <div className="container">
      <div className="carousell mt-4">
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src="./img2.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Let's build a career in tech... </h3>
              <p>
                Learn coding here and get into the tech industy with Skill Up
                and build a career in tech in 2021 . This will open the door of
                numerous opportunity for you. So, Let's Go...
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src="./img4.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Let's build a career in tech... </h3>
              <p>
                Learn coding here and get into the tech industy with Skill Up
                and build a career in tech in 2021 . This will open the door of
                numerous opportunity for you. So, Let's Go...
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carousel-img"
              src="./img5.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Let's build a career in tech... </h3>
              <p>
                Learn coding here and get into the tech industy with Skill Up
                and build a career in tech in 2021 . This will open the door of
                numerous opportunity for you. So, Let's Go...
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="text-center d-flex flex-column align-items-center justify-content-center">
        <h1 className="fw-bold  mt-5">
          Explore our top <span className="text-info">courses</span>{" "}
        </h1>
        <p className="home-para text-secondary mb-5">
          Welcome to Online Learning. You have taken the first important step in
          your life by visiting this site. Choose your course and explore!
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
