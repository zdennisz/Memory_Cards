import { useState } from "react";
import React from "react";
import { MemoryCardList } from "./MemoryCardList";
import Carousel from "react-bootstrap/Carousel";

export const ControlledCarousel = props => {
  let [activeIndex, setActiveIndex] = useState(0);

  const componentDidMount = () => {
    setActiveIndex(props.indexToDelete);
  };

  //<MemoryCardList cards={props.cards} />

  return (
    <Carousel>
      <Carousel.Item />
    </Carousel>
  );
};
