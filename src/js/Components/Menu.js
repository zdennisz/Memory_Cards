import "./Menu.css";
import React from "react";
import deleteAll from "../../icons/deleteAll.png";
import deleteIndex from "../../icons/deleteIndex.png";
import deleteLast from "../../icons/deleteLast.png";

const Menu = (props) => {
  const { openMenuSt } = props;
  const addItemHandler = () => {
    props.handleClickAdd();
  };
  const openSubMenuHandler = () => {
    props.handleOpenMenu();
  };
  const deleteAllHandler = () => {
    props.handleClickDeleteAll();
  };

  const deleteLastHandler = () => {
    props.handleClickDeleteLast();
  };

  const deleteCertainIndexHandler = () => {
    props.handleClickDeleteCertain();
  };

  return (
    <div className="floatingMenuControl">
      <div className="upperSection">
        <i className="fa fa-plus fa-2x iconLocation" onClick={addItemHandler} />
      </div>
      <div className="lowerSection">
        <i
          className="fa fa-trash fa-2x iconLocation"
          onClick={openSubMenuHandler}
        />
        <div
          className={
            openMenuSt
              ? "lowerDeleteSection"
              : "lowerDeleteSection lowerDeleteSectionVisible"
          }
        >
          <div className="deleteAll" onClick={deleteAllHandler}>
            <img
              className="deleteIconLocation"
              src={deleteAll}
              alt="Delete all Cards"
            />
          </div>
          <div className="deleteLast" onClick={deleteLastHandler}>
            <img
              className="deleteIconLocation"
              src={deleteLast}
              alt="Delete all Cards"
            />
          </div>
          <div className="deleteindex" onClick={deleteCertainIndexHandler}>
            <img
              className="deleteIconLocation"
              src={deleteIndex}
              alt="Delete all Cards"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
