import React, { memo, useMemo } from "react";

const HeadingSection = memo(({ title }) => {
  const titleId = useMemo(() => `${title.toLowerCase().replace(/\s+/g, '-')}-heading`, [title]);
  const titleName = useMemo(() => `${title.replace(/\s+/g, '')}Heading`, [title]);

  return (
    <div
      className="text-center mb-10 w-full"
      id={`${titleId}-container`}
      name={`${titleName}Container`}
    >
      <h2
        className="text-4xl font-semibold leading-[60px] capitalize"
        id={titleId}
        name={titleName}
      >
        {title}
      </h2>
    </div>
  );
});

export default HeadingSection;
