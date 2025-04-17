import React from "react";

const TimelineItem = ({
  title,
  date,
  institution,
  description,
  link,
  linkText,
  link2,
  linkText2,
}) => {
  return (
    <div className="timeline-item">
      <span className="date">{date}</span>
      <h4>
        {title}
        {institution && (<span> – {institution}</span>)}
      </h4>
      <p>{description}</p>
      <a href={link} target="_blank" className="text-blue-600 underline">
        {linkText}
      </a>
      {link2 && (
        <a href={link2} target="_blank" className="text-blue-600 underline">
          {linkText2}
        </a>
      )}
    </div>
  );
};

export default TimelineItem;
