import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Settings from "./components/Settings";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/settings" element={<Settings />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
