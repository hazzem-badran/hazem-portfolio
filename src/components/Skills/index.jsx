import React from "react";
import SkillItem from "../SkillItem";
import "./style.css";
import { MY_SKILLS } from "../../constant/skills";

const Skills = () => {
  return (
    <div >
      <h3 className="skill__heading">skills</h3>
      <span className="skills">
        {MY_SKILLS.map((skill, index) => (
          <SkillItem key={index} skill={skill} />
        ))}
      </span>
    </div>
  );
};

export default Skills;
