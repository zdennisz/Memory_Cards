import { useState, useEffect } from "react";
import React from "react";
import { MemoryCardList } from "./MemoryCardList";
import "../styles/styles.css";

import Menu from "./components/Menu/Menu";
import NewCard from "./components/NewCard/NewCard";

export const CardNavigator = () => {
  const [cardsSt, setCardsArraySt] = useState([]); //controls the main data structure
  const [questionSt, setQuestionSt] = useState(""); //controls the get question
  const [answerSt, setAnswerSt] = useState(""); //controls the get answer
  const [viewCardsSt, setViewSt] = useState(0); //controls the  view state
  const [openMenuSt, setOpenMenuSt] = useState(true); //controls the side menu
  const questionHandleChange = (event) => {
    setQuestionSt(event.target.value);
  };

  const answerHandleChange = (event) => {
    setAnswerSt(event.target.value);
  };
  const handleClickAdd = () => {
    setViewSt(1);
  };

  const handleAddItem = () => {
    let question = questionSt;
    const answer = answerSt;
    if (question === "" || answer === "") {
      alert("Impossible to add empty Cards");
    } else {
      if (question.charAt(question.length - 1) === "?") {
        question = question.substring(0, question.length - 1);
      }

      const amountOfCards = cardsSt.length + 1;
      const card = {
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
    setOpenMenuSt(true);
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
    setOpenMenuSt((state) => !state);
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

  return (
    <div className="contentContainer">
      {viewCardsSt ? (
        <NewCard
          answerSt={answerSt}
          questionSt={questionSt}
          handleAddItem={handleAddItem}
          handleCancelEditMode={handleCancelEditMode}
          questionHandleChange={questionHandleChange}
          answerHandleChange={answerHandleChange}
        />
      ) : (
        <>
          <Menu
            openMenuSt={openMenuSt}
            handleClickAdd={handleClickAdd}
            handleOpenMenu={handleOpenMenu}
            handleClickDeleteAll={handleClickDeleteAll}
            handleClickDeleteLast={handleClickDeleteLast}
            handleClickDeleteCertain={handleClickDeleteCertain}
          />
          <div id="list">
            <MemoryCardList cards={cardsSt} />
          </div>
        </>
      )}
    </div>
  );
};
