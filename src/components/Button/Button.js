import React from "react";
import "./Button.css";

const Menu = (props) => {
  const btnClassName = "btn " + props.btnClassName;
  const iClassName = "fa " + props.iClassName + " fa-3x formIconLocation";

  const clickHandler = () => {
    props.handler();
  };

  return (
    <button className={btnClassName} onClick={clickHandler}>
      <i className={iClassName} />
    </button>
  );
};

export default Menu;
