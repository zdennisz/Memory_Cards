import React from "react";
import { MemoryCard } from "./MemoryCard";
function ListItemCard(props) {
  return (
    <li className="listItem">
      <MemoryCard {...props} />
    </li>
  );
}

export const MemoryCardList = props => {
  const cards = props.cards;
  if (props.cards.length > 0) {
    const listItems = cards.map(cardId => (
      <ListItemCard key={cardId.cardIndex.toString()} {...cardId} />
    ));
    return <ul>{listItems}</ul>;
  } else {
    return null;
  }
};
