import { useState } from "react";
import React from "react";
import "./MemoryCard.css";

const MemoryCard = (props) => {
  const [sideOfCard, setSideOfCard] = useState(false);
  const { question, answer, cardIndex } = props;

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
            <i className="fa fa-question-circle fontSize" />
          </div>
        </div>
        <div className="cardFooter">#{cardIndex}</div>
      </div>
    </div>
  );
};

export default MemoryCard;
