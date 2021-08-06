import React from "react";
import "./App.css";

import AppNavigator from "./components/AppNavigator/AppNavigator";

export default function App() {
  return (
    <div className="app">
      <div className="mainContainer">
        <label className="title">Memory Cards</label>
        <AppNavigator />
      </div>
    </div>
  );
}
