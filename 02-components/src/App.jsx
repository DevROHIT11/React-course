import React from "react";
import Card from "./components/C";
import Navbar from "./components/Navbar";
import "./App.css";

const App = () => {
  return (
    <>
      {Navbar()}
      {Card()}
      <Card />
      <Card />
      <Card />
    </>
  );
};

export default App;
