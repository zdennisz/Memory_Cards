import { useState } from "react";
import React from "react";
import "../styles/MemoryCard.css";
import "../styles/styles.css";
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
  //#{props.cardIndex} ,
  if (sideOfCard === 0) {
    return (
      <div className="cardBackground" onClick={handlecardClick}>
        <div className="bar">
          <div className="cardGrey">
            <div className="cardGardient">
              <div className="cardContentContainer">
                <div className="questionView">{props.question.question}</div>
                <i className="fa fa-question-circle fontSize" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="cardBackground" onClick={handlecardClick}>
        <div className="bar">
          <div className="cardGrey">
            <div className="cardGardient">
              <div className="cardContentContainer">
                <div className="answerView">{props.answer.answer}</div>
                <i className="fa fa-exclamation-circle fontSize" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
