import React, { Component } from "react";
import Movies from "./components/movies";
import Navbar from "./components/common/navbar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <main className="container">
          <Movies />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
