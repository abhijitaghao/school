import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import MainPage from "./components/mainDisplay/MainPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <MainPage />
      </div>
    );
  }
}

export default App;
