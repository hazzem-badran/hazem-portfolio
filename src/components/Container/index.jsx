import React from "react";
import "./style.css";

const Container = ({ children }) => {
  return (
    <>
      <div className="overlay"></div>
      <div className="bg-circles">
        <div className="circle-1"></div>
        <div className="circle-2"></div>
        <div className="circle-3"></div>
        <div className="circle-4"></div>
      </div>
      <div className="main hidden"></div>
      <div className="main container">{children}</div>
    </>
  );
};

export default Container;
