import React from "react";
import "./styles.css";

import { CardNavigator } from "./CardNavigator";

var cards = [];

export default function App() {
  return (
    <div className="App">
      <CardNavigator cards={cards} />
    </div>
  );
}
