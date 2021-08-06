import React, { useState } from "react";
import Button from "../Button/Button";
import "./NewCard.css";
const NewCard = (props) => {
  const [questionSt, setQuestionSt] = useState(""); //controls the get question
  const [answerSt, setAnswerSt] = useState(""); //controls the get answer

  const questionHandleChange = (event) => {
    setQuestionSt(event.target.value);
  };

  const answerHandleChange = (event) => {
    setAnswerSt(event.target.value);
  };

  const addItemHandler = () => {
    props.handleAddItem(answerSt, questionSt);
    setQuestionSt("");
    setAnswerSt("");
  };

  const cancelEditItemHandler = () => {
    props.handleCancelEditMode();
  };

  return (
    <div className="mainBackground">
      <div className="gradientEffect">
        <div className="formContainer">
          <div className="inputControl">
            <input
              className="cardInfo"
              type="text"
              value={questionSt}
              placeholder="Question"
              onChange={questionHandleChange}
              required
            />
            <input
              className="cardInfo"
              type="text"
              value={answerSt}
              placeholder="Answer"
              onChange={answerHandleChange}
              required
            />
            <div className="formButtonControl">
              <Button
                handler={addItemHandler}
                btnClassName="addBtn"
                iClassName="fa-check"
              />
              <Button
                handler={cancelEditItemHandler}
                btnClassName="xBtn"
                iClassName="fa-times"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCard;
