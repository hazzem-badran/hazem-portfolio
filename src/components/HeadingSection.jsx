import React from "react";
import "./style.css";

const HeadingSection = ({ title }) => {
  return (
    <div className="text-center mb-10 w-full">
      <h2 className="text-4xl font-semibold leading-[60px] capitalize">
        {title}
      </h2>
    </div>
  );
};

export default HeadingSection;
