import { useState } from "react";
import React from "react";
import "../styles/MemoryCard.css";
export const MemoryCard = props => {
  const [sideOfCard, setSideOfCard] = useState(0);
  //0 is the side of the question and 1 of the answer
  const handlecardClick = () => {
    if (sideOfCard === 0) {
      setSideOfCard(1);
    } else {
      setSideOfCard(0);
    }
  };

  if (sideOfCard === 0) {
    return (
      <div className="cardBackground" onClick={handlecardClick}>
        <div className="cardGardient">
          <div className="cardContent">
            <div className="cardText">
              #{props.cardIndex} <br /> {props.question.question}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="cardBackground" onClick={handlecardClick}>
        <div className="cardGardient">
          <div className="cardContent">
            <div className="cardText">
              #{props.cardIndex} <br /> {props.answer.answer}
            </div>
          </div>
        </div>
      </div>
    );
  }
};
