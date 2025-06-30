import React from "react";

const HeadingSection = ({ title }) => {
  const titleId = `${title.toLowerCase().replace(/\s+/g, '-')}-heading`;
  const titleName = `${title.replace(/\s+/g, '')}Heading`;
  
  return (
    <div 
      className="text-center mb-10 w-full"
      id={`${titleId}-container`}
      name={`${titleName}Container`}
    >
      <h2 
        className="text-4xl font-semibold leading-[60px] capitalize"
        id={titleId}
        name={titleName}
      >
        {title}
      </h2>
    </div>
  );
};

export default HeadingSection;
