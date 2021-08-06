import "./Menu.css";
import React from "react";
import deleteAll from "../../../icons/deleteAll.png";
import deleteIndex from "../../../icons/deleteIndex.png";
import deleteLast from "../../../icons/deleteLast.png";
import SubMenuButton from "../SubMenuButton/SubMenuButton";

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
          <SubMenuButton
            handler={deleteAllHandler}
            tooltiptext="Delete all cards"
            imgClassName="deleteAll"
            altText="Delete all Cards"
            imgSrc={deleteAll}
          />
          <SubMenuButton
            handler={deleteLastHandler}
            tooltiptext="Delete last card"
            imgClassName="deleteLast"
            altText="Delete last card"
            imgSrc={deleteLast}
          />
          <SubMenuButton
            handler={deleteCertainIndexHandler}
            tooltiptext="Delete certain card"
            imgClassName="deleteindex"
            altText="Delete certain card"
            imgSrc={deleteIndex}
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
