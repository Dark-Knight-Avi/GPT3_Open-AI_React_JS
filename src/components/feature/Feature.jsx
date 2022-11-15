import React from "react";
import "./feature.css";

const Feature = ({ heading, para }) => {
  return <div className="gpt3__features-container__feature">
    <div className="gpt3__features-container__feature-title">
      <div/>
      <h1>{heading}</h1>
    </div>
    <div className="gpt3__features-container__feature-text">
      <p>{para}</p>
    </div>
  </div>;
};

export default Feature;
