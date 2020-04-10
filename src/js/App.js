import React from "react";
import "../styles/styles.css";

import { CardNavigator } from "./CardNavigator";

export default function App() {
  return (
    <div className="App">
      <div className="mainContainer">
        <label id="appName">Memory Cards</label>
        <CardNavigator />
      </div>
    </div>
  );
}
