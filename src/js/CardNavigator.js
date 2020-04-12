import { useState } from "react";
import React from "react";
import { MemoryCardList } from "./MemoryCardList";
import "../styles/styles.css";
import deleteAll from "../icons/deleteAll.png";
import deleteIndex from "../icons/deleteIndex.png";
import deleteLast from "../icons/deleteLast.png";

export const CardNavigator = props => {
  let [cards, setCardsArray] = useState([]); //controls the main data structure
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
    var i, deleteIndex;
    var j = 0;
    var numberToDel = prompt("Please enter index To Delete:");
    if (numberToDel == null || numberToDel === "") {
      alert("Please enter a number");
    } else {
      deleteIndex = parseInt(numberToDel, 10);
    }
    if (deleteIndex > cards.length || deleteIndex <= 0) {
      alert("There are no cards under that Id");
    } else {
      let newCards = cards.filter(function(e) {
        if (e.cardIndex.toString() !== deleteIndex.toString()) {
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
        <button
          className="xBtn buttonStyle"
          variant="primary"
          onClick={handleCancelEditMode}
        >
          X
        </button>
      </div>
    );
  } else {
    return (
      <div className="contentContainer">
        <div className="floatingMenuControl">
          <div className="upperSection">
            <i
              className="fa fa-plus fa-2x iconLocation"
              onClick={handleClickAdd}
            />
          </div>
          <div className="lowerSection">
            <i
              className="fa fa-trash fa-2x iconLocation"
              onClick={handleOpenMenu}
            />
            <div
              className={
                openMenu
                  ? "lowerDeleteSection"
                  : "lowerDeleteSection lowerDeleteSectionVisible"
              }
            >
              <div className="deleteAll" onClick={handleClickDeleteAll}>
                <img
                  className="deleteIconLocation"
                  src={deleteAll}
                  alt="Delete all Cards"
                />
              </div>
              <div className="deleteLast" onClick={handleClickDeleteLast}>
                <img
                  className="deleteIconLocation"
                  src={deleteLast}
                  alt="Delete all Cards"
                />
              </div>
              <div className="deleteindex" onClick={handleClickDeleteCertain}>
                <img
                  className="deleteIconLocation"
                  src={deleteIndex}
                  alt="Delete all Cards"
                />
              </div>
            </div>
          </div>
        </div>
        <div id="list">
          <MemoryCardList cards={cards} />
        </div>
      </div>
    );
  }
};
