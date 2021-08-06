import React, { memo } from "react";
import MemoryCard from "../MemoryCard/MemoryCard";
import "./MemoryCardList.css";

function ListItemCard(props) {
  return (
    <li className="listItem">
      <MemoryCard {...props} />
    </li>
  );
}

const MemoryCardList = (props) => {
  const listItems = props.cards.map((card) => (
    <ListItemCard key={card.cardIndex.toString()} {...card} />
  ));
  return <ul>{listItems}</ul>;
};

export default memo(MemoryCardList);
