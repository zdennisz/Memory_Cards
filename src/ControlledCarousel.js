import { useState } from "react";
import React from "react";
// import { MemoryCardList } from "./MemoryCardList";

export const ControlledCarousel = props => {
  let [activeIndex, setActiveIndex] = useState(0);
  setActiveIndex(props.indexToDelete);

  return null;
  // return ( <MemoryCardList cards={props.cards} />  )
};
