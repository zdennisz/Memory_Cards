import { useState } from "react";
import React from "react";
import "./MemoryCard.css";

const MemoryCard = (props) => {
  const [sideOfCard, setSideOfCard] = useState(false);
  const { question, answer, cardIndex } = props;
  let iClassName = "fa fontSize ";
  const handleCardClick = () => {
    setSideOfCard((state) => !state);
  };

  return (
    <div className="cardBackground" onClick={handleCardClick}>
      <div className="bar">
        <div className="cardGrey" />
        <div className="cardGardient" />
      </div>
      <div className="cardContentContainer">
        <div className="cardContentLayout">
          <div className="cardBorderContainer">
            <div className="cardView">{sideOfCard ? answer : question}</div>
            <i
              className={
                sideOfCard
                  ? iClassName + "fa-exclamation-circle"
                  : iClassName + "fa-question-circle"
              }
            />
          </div>
        </div>
        <div className="cardFooter">#{cardIndex}</div>
      </div>
    </div>
  );
};

export default MemoryCard;
