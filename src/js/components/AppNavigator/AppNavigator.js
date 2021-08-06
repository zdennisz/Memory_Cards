import React, { useState, useEffect } from "react";

import "./AppNavigator.css";
import MemoryCardList from "../MemoryCardList/MemoryCardList";
import Menu from "../Menu/Menu";
import NewCard from "../NewCard/NewCard";

const AppNavigator = () => {
  const [cardsSt, setCardsArraySt] = useState([]); //controls the main data structure
  const [viewCardsSt, setViewSt] = useState(false); //controls the  view state
  const [openMenuSt, setOpenMenuSt] = useState(true); //controls the side menu

  const handleClickAdd = () => {
    setViewSt(true);
  };

  const handleAddItem = (answer, question) => {
    if (question.charAt(question.length - 1) === "?") {
      question = question.substring(0, question.length - 1);
    }

    const amountOfCards = cardsSt.length + 1;
    const card = {
      cardIndex: amountOfCards,
      question: question,
      answer: answer
    };
    localStorage.setItem("cards", JSON.stringify(cardsSt.concat(card)));
    setCardsArraySt(cardsSt.concat(card));
    setViewSt(false);
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
    setViewSt(false);
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
          handleAddItem={handleAddItem}
          handleCancelEditMode={handleCancelEditMode}
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

export default AppNavigator;
