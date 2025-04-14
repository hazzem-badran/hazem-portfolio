import React from "react";
import './style.css';

const HeadingSection = ({title}) => {
  return (
    <div className="heading__section">
      <h2>{title}</h2>
    </div>
  );
};

export default HeadingSection;
