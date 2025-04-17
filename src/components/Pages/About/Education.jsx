import React from "react";
import TimelineItem from "./TimelineItem";
import { EDUCATION } from "../../../constant/education";
import { Fragment } from "react";

const Education = () => {
  return (
    <div className="tab-content active" id="education">
      <div className="timeline">
        {EDUCATION.map((item, index) => (
          <Fragment key={index}>
            <TimelineItem
              date={item.date}
              title={item.title}
              institution={item.institution}
              description={item.description}
              link={item.link.href}
              linkText={item.link.text}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Education;
