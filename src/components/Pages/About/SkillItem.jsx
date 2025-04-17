import React from "react";

const SkillItem = ({ skill }) => {
  return (
    <div className="bg-white/25 border border-white/40 rounded-full m-0 mr-2 mb-2 px-4 py-1 capitalize cursor-pointer relative overflow-hidden hvr-fancy  ">
      {skill}
    </div>
  );
};

export default SkillItem;
