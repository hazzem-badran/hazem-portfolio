import TimelineItem from "./TimelineItem";
import { Fragment } from "react";
import { CAREER } from "../../../constant/career";

const Career = () => {
  return (
    <div className="tab-content active" id="career">
      <div className="timeline">
        {CAREER.map((item, index) => (
          <Fragment key={index}>
            <TimelineItem
              date={item.date}
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

export default Career;
