import React, { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Button = memo(({ stylee, type = "button", children, navigateTo, id, name }) => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    if (navigateTo) {
      navigate(navigateTo);
    }
  }, [navigateTo, navigate]);

  return (
    <button id={id} type={type || "button"} name={name} className={`${stylee}`} onClick={handleClick}>
      {children}
    </button>
  );
});

export default Button;