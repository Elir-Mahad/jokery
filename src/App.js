import React from "react";
import "./App.css";
import Landing from "./components/Landing";
import Settings from "./components/Settings";

function App() {
  return (
    <div className="App">
      <h1>Jokery</h1>
      <Landing />
      <Settings />
    </div>
  );
}

export default App;
