import React from "react";
import { PROJECTS } from "../../../constant/projects";
import { Fragment } from "react";
import TimelineItem from "./TimelineItem";

const Projects = () => {
  return (
    <div className="tab-content active" id="projects">
      <div className="timeline">
      {PROJECTS.map((item, index) => (
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

export default Projects;
