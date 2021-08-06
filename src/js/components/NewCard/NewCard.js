import React from "react";
import Button from "../Button/Button";
import "./NewCard.css";
const NewCard = (props) => {
  const { answerSt, questionSt } = props;

  const questionHandleChange = (event) => {
    props.questionHandleChange(event);
  };

  const answerHandlerChange = (event) => {
    props.answerHandleChange(event);
  };

  const addItemHandler = () => {
    props.handleAddItem();
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
            />
            <input
              className="cardInfo"
              type="text"
              value={answerSt}
              placeholder="Answer"
              onChange={answerHandlerChange}
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
