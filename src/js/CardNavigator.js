import { useState } from "react";
import React from "react";
import Button from "react-bootstrap/Button";
import { MemoryCardList } from "./MemoryCardList";
import "../styles/styles.css";
export const CardNavigator = props => {
  let [cards, setCardsArray] = useState([]); //controls the main data structure
  const [index, setIndex] = useState(0); //controls  getting index from input
  const [question, setQuestion] = useState(""); //controls the get question
  const [answer, setAnswer] = useState(""); //controls the get answer
  const [viewCards, setView] = useState(0); //controls the  view state
  const [openMenu, setOpenMenu] = useState(1);

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
    let amountOfCards = cards.length + 1;
    let card = {
      cardIndex: amountOfCards,
      question: { question },
      answer: { answer }
    };
    setCardsArray(cards.concat(card));
    setAnswer("");
    setQuestion("");
    setView(0);
    setOpenMenu(1);
  };

  const handleClickDeleteLast = () => {
    if (cards.length > 0) {
      let newCards = cards.filter(function(e) {
        if (e.cardIndex !== cards.length) {
          return true;
        } else {
          return false;
        }
      });
      setCardsArray(newCards);
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
      setCardsArray([]);
    }
  };
  const handleClickDeleteCertain = () => {
    var i,
      j = 0;

    if (index > cards.length || index <= 0) {
      alert("There are no cards under that Id");
    } else {
      let newCards = cards.filter(function(e) {
        if (e.cardIndex.toString() !== index.toString()) {
          return true;
        } else {
          return false;
        }
      });

      for (i = 0; i < newCards.length; i++) {
        j++;
        newCards[i].cardIndex = j;
      }
      setCardsArray(newCards);
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
      <div className="contentContainer">
        <div className="mainBackground">
          <div className="gradientEffect">
            <div className="formContainer">
              <form className="inputControl" onSubmit={handleAddItem}>
                <label className="labelPos">Question:</label>
                <input
                  className="cardInfo"
                  type="text"
                  value={question}
                  onChange={questionHandleChange}
                />

                <label className="labelPos">Answer:</label>
                <input
                  className="cardInfo"
                  type="text"
                  value={answer}
                  onChange={answerHandleChange}
                />

                <input
                  className="buttonStyle addButton"
                  type="submit"
                  value="Add"
                />
              </form>
            </div>
          </div>
        </div>
        <Button
          className="xBtn buttonStyle"
          variant="primary"
          onClick={handleCancelEditMode}
        >
          X
        </Button>
      </div>
    );
  } else {
    return (
      <div className="contentContainer">
        <div className="buttonControl">
          <Button
            className="buttonStyle addCardBtn"
            variant="primary"
            onClick={handleClickAdd}
          >
            Add Card
          </Button>
          <Button
            className="buttonStyle deleteCardBtn"
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
                ? "floatingMenu closedFloatingMenu"
                : "floatingMenu openFloatingMenu"
            }
          >
            <Button
              className="buttonStyle deleteCardBtn"
              variant="primary"
              onClick={handleClickDeleteLast}
            >
              Delete Last
            </Button>
            <Button
              className="buttonStyle deleteCardBtn"
              variant="primary"
              onClick={handleClickDeleteAll}
            >
              Delete All
            </Button>

            <Button
              className="buttonStyle deleteCardBtn"
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
    );
  }
};
