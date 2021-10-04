import "./SingleTechData.css";
import React from "react";
import { ButtonGroup, Card, Col } from "react-bootstrap";

const SingleTechData = (props) => {
  const { img, name, price, duration } = props.tdata;
  return (
    <div>
      <Col>
        <Card>
          <div className="tech-img">
            <Card.Img variant="top img-fluid" src={img} />
          </div>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer className="bg-white">
            <div className="d-flex justify-content-around align-items-baseline">
              <p>
                <svg
                  className="time-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-stopwatch-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07A7.001 7.001 0 0 0 8 16a7 7 0 0 0 5.29-11.584.531.531 0 0 0 .013-.012l.354-.354.353.354a.5.5 0 1 0 .707-.707l-1.414-1.415a.5.5 0 1 0-.707.707l.354.354-.354.354a.717.717 0 0 0-.012.012A6.973 6.973 0 0 0 9 2.071V1h.5a.5.5 0 0 0 0-1h-3zm2 5.6V9a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1 0-1h3V5.6a.5.5 0 1 1 1 0z" />
                </svg>
                {duration}
              </p>
              <p>Price: ${price}</p>
             <ButtonGroup className='btn btn-info fw-bold'>Detail</ButtonGroup>
            </div>
          </Card.Footer>
        </Card>
      </Col>
    </div>
  );
};

export default SingleTechData;
