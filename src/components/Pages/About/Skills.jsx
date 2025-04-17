import React from "react";
import SkillItem from "./SkillItem";
import { MY_SKILLS } from "../../../constant/skills";

const Skills = () => {
  return (
    <div >
      <h3 className="capitalize text-lg my-5">skills</h3>
      <span className="flex flex-wrap">
        {MY_SKILLS.map((skill, index) => (
          <SkillItem key={index} skill={skill} />
        ))}
      </span>
    </div>
  );
};

export default Skills;

