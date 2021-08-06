import React from "react";
import "./SubMenuButton.css";
const SideMenuButton = (props) => {
  const { tooltiptext, imgClassName, altText, imgSrc } = props;

  const cliclHandler = () => {
    props.handler();
  };
  return (
    <div className={imgClassName} onClick={cliclHandler}>
      <img className="deleteIconLocation" src={imgSrc} alt={altText} />
      <span className="tooltiptext">{tooltiptext}</span>
    </div>
  );
};

export default SideMenuButton;
