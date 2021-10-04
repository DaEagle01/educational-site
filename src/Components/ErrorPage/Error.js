import "./Error.css";
import React from "react";

const Error = () => {
  return (
    <div className="container mt-5 text-center">
      <h1 className="text-danger">Error: 404.</h1>
      <h3> Please, enter a valid link...</h3>
      <div className="mt-5">
        <img className="img-fluid" src="./404.svg" alt="" />
      </div>
    </div>
  );
};

export default Error;
