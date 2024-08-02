import React from "react";
import thisOne from "../../../images/thisOne.jpg";

const LeftSection = () => {
  return (
    <div className="leftSection">
      <img src={thisOne} alt="" className="image" />
      <h1 className="header">Welcome!</h1>
    </div>
  );
};

export default LeftSection;
