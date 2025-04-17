import React from "react";
import { INTERSHIP } from "../../../constant/internship";
import TimelineItem from "./TimelineItem";
import { Fragment } from "react";

const Intership = () => {
  return (
    <div className="tab-content active" id="internship">
      <div className="timeline">
        {INTERSHIP.map((item, index) => (
          <Fragment key={index}>
            <TimelineItem
              title={item.title}
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

export default Intership;
