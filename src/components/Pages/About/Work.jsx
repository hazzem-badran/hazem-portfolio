import TimelineItem from "./TimelineItem";
import { Fragment } from "react";
import { WORK } from "../../../constant/work";

const Work = () => {
  return (
    <div className="tab-content active" id="work">
      <div className="timeline">
        {WORK.map((item, index) => (
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
