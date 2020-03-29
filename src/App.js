import React from "react";
import "./styles.css";
import Card from "@material-ui/core/Card";
import Button from "react-bootstrap/Button";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import { useState } from "react";

function MemoryCard(props) {
  let [sideOfCard, setSideOfCard] = useState(0);
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
      <Card className="cardProperties" onClick={handlecardClick}>
        <CardActionArea>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              #{props.cardIndex + 1} <br /> {props.question.question} ?
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  } else {
    return (
      <Card className="cardProperties" onClick={handlecardClick}>
        <CardActionArea>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              #{props.cardIndex + 1} <br />
              {props.answer.answer}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

function ListItem(props) {
  return (
    <li className="listItem">
      <MemoryCard {...props} />
    </li>
  );
}

function CardList(props) {
  const cards = props.cards;
  const listItems = cards.map(cardId => (
    <ListItem key={cardId.cardIndex.toString()} {...cardId} />
  ));
  return <ul>{listItems}</ul>;
}

function MemoryCards(props) {
  let [cards, setCount] = useState(0); //controls the main data structure
  let [index, setIndex] = useState(0); //controls  getting index from input
  let [question, setQuestion] = useState(""); //controls the get question
  let [answer, setAnswer] = useState(""); //controls the get answer
  let [viewCards, setView] = useState(0); //controls the  view state
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
    if (index > cards.length || index === 0) {
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

  const indexHandleChange = event => {
    setIndex(event.target.value);
  };
  if (viewCards === 1) {
    return (
      <div>
        <form className="Container-Form" onSubmit={handleAddItem}>
          <label>
            Question:
            <input
              type="text"
              value={question}
              onChange={questionHandleChange}
            />
          </label>
          <label>
            Answer:
            <input type="text" value={answer} onChange={answerHandleChange} />
          </label>
          <input type="submit" value="Add" />
          <Button variant="primary" onClick={handleCancelEditMode}>
            X
          </Button>
        </form>
      </div>
    );
  } else {
    return (
      <div className="Container">
        <label>Memory Cards</label>
        <Button variant="primary" onClick={handleClickAdd}>
          Add Card
        </Button>
        <Button variant="primary" onClick={handleClickDeleteLast}>
          Delete Last
        </Button>
        <Button variant="primary" onClick={handleClickDeleteAll}>
          Delete All
        </Button>
        <br />
        <input
          type="text"
          value={index}
          id="indexToDelete"
          placeholder="Card to Delete"
          onChange={indexHandleChange}
        />
        <Button
          onClick={handleClickDeleteCertain}
          hint="Enter Card to Delete"
          size="small"
          color="primary"
        >
          Delete
        </Button>

        <div id="list">
          <CardList cards={cards} />
        </div>
      </div>
    );
  }
}

var cards = [];

export default function App() {
  return (
    <div className="App">
      <MemoryCards cards={cards} />
    </div>
  );
}
