import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ stylee, type = "button", children, navigateTo, id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (navigateTo) {
      navigate(navigateTo);
    }
  };

  return (
    <button id={id} type={type || "button"} className={`${stylee}`} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;