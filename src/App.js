import React from "react";
import "./styles.css";

import { CardNavigator } from "./CardNavigator";

export default function App() {
  return (
    <div className="App">
      <div className="Main_Container">
        <label id="appName">Memory Cards</label>
        <CardNavigator />
      </div>
    </div>
  );
}
