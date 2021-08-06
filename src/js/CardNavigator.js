import { useState, useEffect } from "react";
import React from "react";
import { MemoryCardList } from "./MemoryCardList";
import "../styles/styles.css";
import deleteAll from "../icons/deleteAll.png";
import deleteIndex from "../icons/deleteIndex.png";
import deleteLast from "../icons/deleteLast.png";

export const CardNavigator = props => {
  const [cardsSt, setCardsArraySt] = useState([]); //controls the main data structure
  const [questionSt, setQuestionSt] = useState(""); //controls the get question
  const [answerSt, setAnswerSt] = useState(""); //controls the get answer
  const [viewCardsSt, setViewSt] = useState(0); //controls the  view state
  const [openMenuSt, setOpenMenuSt] = useState(1);//controls the side menu 
  const questionHandleChange = event => {
    setQuestionSt(event.target.value);
  };

  const answerHandleChange = event => {
    setAnswerSt(event.target.value);
  };
  const handleClickAdd = () => {
    setViewSt(1);
  };

  const handleAddItem = () => {
    let question = questionSt;
    let answer = answerSt;
    if (question === "" || answer === "") {
      alert("Impossible to add empty Cards");
    } else {
      if (question.charAt(question.length - 1) === "?") {
        question = question.substring(0, question.length - 1);
      }

      let amountOfCards = cardsSt.length + 1;
      let card = {
        cardIndex: amountOfCards,
        question: { question },
        answer: { answer }
      };
      localStorage.setItem("cards", JSON.stringify(cardsSt.concat(card)));
      setCardsArraySt(cardsSt.concat(card));
    }
    setAnswerSt("");
    setQuestionSt("");
    setViewSt(0);
    setOpenMenuSt(1);
  };

  const handleClickDeleteLast = () => {
    if (cardsSt.length > 0) {
      let newCards = cardsSt.filter(function (e) {
        if (e.cardIndex !== cardsSt.length) {
          return true;
        } else {
          return false;
        }
      });
      setCardsArraySt(newCards);
      localStorage.setItem("cards", JSON.stringify(newCards));
      handleOpenMenu();
    } else {
      alert("There are no cards to delete");
    }
  };

  const handleCancelEditMode = () => {
    setAnswerSt("");
    setQuestionSt("");
    setViewSt(0);
  };
  const handleClickDeleteAll = () => {
    var amountOfCards = cardsSt.length;
    if (amountOfCards === 0) {
      alert("There are no cards to delete");
    } else {
      setCardsArraySt([]);
      localStorage.setItem("cards", JSON.stringify([]));
    }
    handleOpenMenu();
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
    if (deleteIndex > cardsSt.length || deleteIndex <= 0) {
      alert("There are no cards under that Id");
    } else {
      let newCards = cardsSt.filter(function (e) {
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
      setCardsArraySt(newCards);
      localStorage.setItem("cards", JSON.stringify(newCards));

      handleOpenMenu();
    }
  };

  const handleOpenMenu = () => {
    if (openMenuSt === 0) {
      setOpenMenuSt(1);
    } else {
      setOpenMenuSt(0);
    }
  };
  //on load retreive state from local storage
  function updateStateFromLocalStorage() {
    if (localStorage.hasOwnProperty("cards")) {
      let cardlist = localStorage.getItem("cards");
      try {
        cardlist = JSON.parse(cardlist);
        setCardsArraySt(cardlist);
      } catch (e) {
        console.log(e);
      }
    }
  }

  useEffect(() => {
    //componentDidMount
    updateStateFromLocalStorage();
  }, []);

  if (viewCardsSt === 1) {
    return (
      <div className="contentContainer">
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
                  onChange={answerHandleChange}
                />
                <Menu handleAddItem={handleAddItem} handleCancelEditMode={handleCancelEditMode} />
                {/* <div className="formButtonControl">
                  <button className="addBtn" onClick={handleAddItem}>
                    <i className="fa fa-check fa-3x formIconLocation" />
                  </button>
                  <button className="xBtn" onClick={handleCancelEditMode}>
                    <i className="fa fa-times fa-3x formIconLocation" />
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
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
                openMenuSt
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
          <MemoryCardList cards={cardsSt} />
        </div>
      </div>
    );
  }
};
