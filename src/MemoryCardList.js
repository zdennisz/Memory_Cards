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
  const listItems = props.cards.map(cardId => (
    <ListItemCard key={cardId.cardIndex.toString()} {...cardId} />
  ));
  return <ul>{listItems}</ul>;
};
