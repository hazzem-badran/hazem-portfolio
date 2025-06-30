import React from "react";
import SkillItem from "./SkillItem";
import { MY_SKILLS } from "../../../constant/skills";

const Skills = () => {
  return (
    <div id="skills-section" name="skillsSection">
      <h3 
        className="capitalize text-lg my-5"
        id="skills-title"
        name="skillsTitle"
      >
        skills
      </h3>
      <span 
        className="flex flex-wrap"
        id="skills-container"
        name="skillsContainer"
      >
        {MY_SKILLS.map((skill, index) => (
          <SkillItem key={index} skill={skill} index={index} />
        ))}
      </span>
    </div>
  );
};

export default Skills;

