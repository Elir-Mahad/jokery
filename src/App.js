import React from "react";
import "./App.css";
import Header from "./components/Header";
import SettingsCard from "./components/SettingsCard";
import Footer from "./components/Footer";
import { WholeApp } from "./Styles";

function App() {
  return (
    <WholeApp>
      <Header />
      <SettingsCard />
      <Footer />
    </WholeApp>
  );
}

export default App;
