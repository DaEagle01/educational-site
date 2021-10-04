import "./About.css";
import React from "react";
import { NavLink } from "react-bootstrap";

const About = () => {
  return (
    <div className="container">
      <h1 className="aboutUs">About Us!</h1>
      <h3 className="text-center mb-4">Hello Friends! Welcome To SkillUp</h3>
      <p>
        <span className="fw-bold">Skill Up</span> is a Professional teaching
        Platform. Here we will provide you only interesting content, which you
        will like very much.
      </p>
      <p>
        We're dedicated to providing you the best of teaching, with a focus on
        dependability and daily update.
      </p>
      <p>
        We're working to turn our passion for teaching into a booming online
        website. We hope you enjoy our teaching as much as we enjoy offering
        them to you.At SkillUp Online, we focus on creating enriching, engaging
        learning journeys that helps our learners their build career in desired
        technology skills in easy, fun & meaningful way. With the aim of
        deriving maximum learning outcomes, our courses are developed by
        industry leaders like Microsoft, leverage innovative learning
        strategies, hands on labs & interactive activities, personalized
        mentoring & coaching services. And all this with complete flexibility of
        learning anytime, anywhere! What’s more is that for each course you
        complete successfully, you earn a verified course completion certificate
        by industry leaders like Microsoft.
      </p>
      <p className="fs-5">
        We post important posts everyday on this Website for all of you. So, you
        can subscribe to our newsletter.
      </p>
      <h3>Please give your support and love. Thanks For Visiting Our Site</h3>
      <h2 className="text-center mt-4 fw-bolder">
        <NavLink className="text-info fs-1" to="/contact">
          Contact Us !
        </NavLink>
      </h2>
    </div>
  );
};

export default About;
