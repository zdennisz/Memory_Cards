import { useState } from "react";
import React from "react";
import { ListItemCard } from "./MemoryCardList";
import Carousel from "react-bootstrap/Carousel";

export const ControlledCarousel = props => {
  const [activeCard, setActiveCard] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    console.log(e);
    if (e.direction === "prev") {
      setActiveCard(--selectedIndex);
    } else {
      setActiveCard(++selectedIndex);
    }
  };

  return (
    <Carousel activeIndex={activeCard} onSelect={handleSelect}>
      <Carousel.Item>
        {props.cards.length > 0 ? (
          <ListItemCard cardToShow={props.cards[activeCard]} />
        ) : null}
      </Carousel.Item>
    </Carousel>
  );
};
