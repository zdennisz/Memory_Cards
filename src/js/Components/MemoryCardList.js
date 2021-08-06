import React from "react";
import { MemoryCard } from "./MemoryCard";
import "../styles/MemoryCard.css";
import "../styles/styles.css";
function ListItemCard(props) {
  return (
    <li className="listItem">
      <MemoryCard {...props} />
    </li>
  );
}

export const MemoryCardList = props => {
  const listItems = props.cards.map(card => (
    <ListItemCard key={card.cardIndex.toString()} {...card} />
  ));
  return <ul>{listItems}</ul>;
};
