import { useState } from "react";
import React from "react";
import Button from "react-bootstrap/Button";
import { MemoryCardList } from "./MemoryCardList";
export const CardNavigator = props => {
  let [cards, setCount] = useState(0); //controls the main data structure
  const [index, setIndex] = useState(0); //controls  getting index from input
  const [question, setQuestion] = useState(""); //controls the get question
  const [answer, setAnswer] = useState(""); //controls the get answer
  const [viewCards, setView] = useState(0); //controls the  view state
  const [openMenu, setOpenMenu] = useState(1);
  cards = props.cards;

  const questionHandleChange = event => {
    setQuestion(event.target.value);
  };

  const answerHandleChange = event => {
    setAnswer(event.target.value);
  };
  const handleClickAdd = () => {
    setView(1);
  };

  const handleAddItem = () => {
    let amountOfCards = cards.length;
    let card = {
      cardIndex: amountOfCards,
      question: { question },
      answer: { answer }
    };
    setCount(cards.push(card));
    setAnswer("");
    setQuestion("");
    setView(0);
  };

  const handleClickDeleteLast = () => {
    if (cards.length > 0) {
      setCount(cards.pop());
    } else {
      alert("There are no cards to delete");
    }
  };

  const handleCancelEditMode = () => {
    setAnswer("");
    setQuestion("");
    setView(0);
  };
  const handleClickDeleteAll = () => {
    var amountOfCards = cards.length;
    if (amountOfCards === 0) {
      alert("There are no cards to delete");
    } else {
      for (let i = 0; i <= amountOfCards; i++) {
        cards.pop();
      }
      setCount(cards);
    }
  };
  const handleClickDeleteCertain = () => {
    let updateIndex = false;
    if (index > cards.length || index === 0 || typeof index !== "number") {
      alert("There are no cards under that Id");
    } else {
      let indexToDel = index - 1;
      let i;
      for (i = 0; i < cards.length; i++) {
        if (cards[i].cardIndex === indexToDel) {
          cards.splice(indexToDel, 1);
          updateIndex = true;
          break;
        }
      }
      if (updateIndex) {
        for (let j = i; j < cards.length; j++) {
          //update the card index to align with actual updated array
          cards[j].cardIndex--;
        }
      }
      setCount(cards.length);
    }
  };

  const handleOpenMenu = () => {
    if (openMenu === 0) {
      setOpenMenu(1);
    } else {
      setOpenMenu(0);
    }
  };

  const indexHandleChange = event => {
    setIndex(event.target.value);
  };
  if (viewCards === 1) {
    return (
      <div className="Content_Container ">
        <div className="MainBackground">
          <div className="GradientEffect">
            <div className="Form_Container">
              <form className="Input_Control" onSubmit={handleAddItem}>
                <label className="labelPos">Question:</label>
                <input
                  className="cardinfo"
                  type="text"
                  value={question}
                  onChange={questionHandleChange}
                />

                <label className="labelPos">Answer:</label>
                <input
                  className="cardinfo"
                  type="text"
                  value={answer}
                  onChange={answerHandleChange}
                />

                <input
                  className="ButtonStyle addButton"
                  type="submit"
                  value="Add"
                />
              </form>
            </div>
          </div>
        </div>
        <Button
          className="x_Btn ButtonStyle"
          variant="primary"
          onClick={handleCancelEditMode}
        >
          X
        </Button>
      </div>
    );
  } else {
    return (
      <div className="Content_Container">
        <div className="Show_Container">
          <div className="Button_Control">
            <Button
              className="ButtonStyle addCardBtn"
              variant="primary"
              onClick={handleClickAdd}
            >
              Add Card
            </Button>
            <Button
              className="ButtonStyle deleteCardBtn"
              hint="Enter Card to Delete"
              onClick={handleOpenMenu}
              size="small"
              color="primary"
            >
              Delete
            </Button>
            <div
              className={
                openMenu
                  ? "FloatingMenu closedFloatingMenu"
                  : "FloatingMenu openFloatingMenu"
              }
            >
              <Button
                className="ButtonStyle deleteCardBtn"
                variant="primary"
                onClick={handleClickDeleteLast}
              >
                Delete Last
              </Button>
              <Button
                className="ButtonStyle deleteCardBtn"
                variant="primary"
                onClick={handleClickDeleteAll}
              >
                Delete All
              </Button>

              <Button
                className="ButtonStyle deleteCardBtn"
                onClick={handleClickDeleteCertain}
                hint="Enter Card to Delete"
                size="small"
                color="primary"
              >
                Delete Index
              </Button>
              <input
                type="text"
                value={index}
                id="indexToDelete"
                placeholder="Card to Delete"
                onChange={indexHandleChange}
              />
            </div>
          </div>

          <div id="list">
            <MemoryCardList cards={cards} />
          </div>
        </div>
      </div>
    );
  }
};
